import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as shader from "./Shaders/Shader";
import { InteractionManager } from "./Tools/three.interactive"
import {createStar, starRotation} from './Entities/Star'
import {addPlanets} from './Entities/Planets'
import {loadDAEModel} from './Entities/Stations'
import {getTrackCoordinates, printCurrentPosition} from './Entities/Tracker'

export default class Sketch {
  constructor(selector) {
    //Solar System global vars
    this.glows = [];
    this.star = false;
    this.planets = [];
    this.locatorPoints = [];
    this.locatorLines = {};
    this.stations = [];
    this.meshesDAE = {}
    this.reductorCoordinates = 0.5;
    this.lastZoomValue = 0;
    this.cameraFollowTo = null;
    this.insidePlanet = false;
    this.scaleValues = {
        multiplier: 0.0025025062,
        adjustment: 0.001002506265 
    }
    this.cameraInitPos = {
      x:0,
      y:235,
      z:800
    }
    this.cameraWorldPos = new THREE.Vector3();


    this.scene = new THREE.Scene();
    this.scene.background = new THREE.TextureLoader().load( '/images/space_background.png' );
    this.container = selector;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    window.addEventListener('searchCenterObject', (event) => this.searchAndCenter(this,event))
    window.addEventListener('loadMapLocators', (event) => getTrackCoordinates(this,event))
    window.addEventListener('printCurrentPosition', (event) => printCurrentPosition(this,event))

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      40000
    );

    // var frustumSize = 10;
    // var aspect = window.innerWidth / window.innerHeight;
    // this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
    this.camera.position.set(this.cameraInitPos.x,this.cameraInitPos.y, this.cameraInitPos.z)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 1;
    this.controls.zoomSpeed = 5;
    this.controls.maxDistance = 1800.0;
    this.controls.addEventListener('change',() => this.resizePOV(this))
    this.controls.addEventListener('keydown', () => this.keyDown(this))
    window.addEventListener('keydown', (event) => this.keyDown(event, this))
    this.time = 0;
    this.interactionManager = new InteractionManager(
      this.renderer,
      this.camera,
      this.renderer.domElement
    )

    this.isPlaying = true;

    this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
  }

  keyDown = (evt,sketch) => {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {    
        sketch.resetCameraToCenter(sketch);
    }
  }

  resizePOV = (sketch) => {
    var zoomValue = sketch.controls.target.distanceTo(sketch.controls.object.position);
    //console.log(zoomValue);
    if(zoomValue != sketch.lastZoomValue){
        if(zoomValue <= 200 && sketch.camera.near == 0.1){
          sketch.camera.near = 0.001
          sketch.camera.updateProjectionMatrix();
        }else if (zoomValue > 200 && sketch.camera.near == 0.001){
          sketch.camera.near = 0.1;
          sketch.camera.updateProjectionMatrix();
        }
        sketch.lastZoomValue = zoomValue;
        sketch.planets.map(function(p){
          sketch.rescaleFromCamera(p, p.scaleZoom, 0.0015, 3);
        });
        sketch.locatorPoints.map(function(l){
          if(l.name == 'current_location'){
            sketch.rescaleFromCamera(l,10,0.00012,10)
          }else{
            sketch.rescaleFromCamera(l,10,0.0001,10)
          }
        })
        sketch.stations.map(function(s){
          sketch.rescaleFromCamera(s,5,0.0005,1)
        })
    }
  }

  centerToObjectAndZoom = (sketch, obj) =>{
    sketch.controls.target = new THREE.Vector3(obj.position.x, obj.position.y, obj.position.z)
    sketch.camera.lookAt(obj.position);
    sketch.controls.update();
    sketch.cameraFollowTo = obj;
    sketch.resizePOV(sketch);
  }

  resetCameraToCenter = (sketch) => {
    sketch.cameraFollowTo = null;
    sketch.controls.target = new THREE.Vector3(0,0,0)
    sketch.controls.reset();
    sketch.camera.position.set(sketch.cameraInitPos.x,sketch.cameraInitPos.y, sketch.cameraInitPos.z);
    sketch.resizePOV(sketch);
  }

  

  rescaleFromCamera = (obj, scaleZoom, minScale, maxScale = 1) => {
    this.camera.getWorldPosition(this.cameraWorldPos);
    var dist = obj.position.distanceTo(this.cameraWorldPos);
    var rescaleFactor = Math.max((this.scaleValues.multiplier * dist) - this.scaleValues.adjustment,minScale);
    var newScale = Math.min(rescaleFactor * scaleZoom, maxScale);
    obj.scale.set(newScale , newScale, newScale);
  }

  makeTextSprite( message, parameters ){
      if ( parameters === undefined ) parameters = {};
      var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
      var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
      var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
      var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
      var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:0, g:0, b:255, a:1.0 };
      var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      context.font = "Bold " + fontsize + "px " + fontface;
      var metrics = context.measureText( message );
      var textWidth = metrics.width;

      context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
      context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
      context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
      context.fillText( message, borderThickness, fontsize + borderThickness);

      var texture = new THREE.Texture(canvas) 
      texture.needsUpdate = true;
      var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
      var sprite = new THREE.Sprite( spriteMaterial );
      sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
      return sprite;  
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.resizePOV(this)
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { type: "f", value: 0 },
        resolution: { type: "v4", value: new THREE.Vector4() },
        uvRate1: {
          value: new THREE.Vector2(1, 1),
        },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: shader.vertex,
      fragmentShader: shader.fragment,
    });
    createStar(this);
    addPlanets(this);
    loadDAEModel(this, 'StationBravo', 'station');
    getTrackCoordinates(this,{detail: {force: 1}})
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.render();
      this.isPlaying = true;
    }
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.01;
    starRotation(this);
    this.interactionManager.update();
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  searchAndCenter = (sketch, event) => {
    if(event.detail && event.detail.id){
      if(event.detail.id == '-1'){
        sketch.resetCameraToCenter(sketch)
      }else{
        var obj = sketch.scene.getObjectByProperty('trackerId',event.detail.id)
        obj.centerLink(sketch, obj);
      }
    }
  }
}