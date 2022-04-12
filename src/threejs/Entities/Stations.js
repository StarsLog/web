import * as THREE from "three";
import { getPlanetData } from './Planets';
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

const loaderDAE = new ColladaLoader();

const stationMaterial = new THREE.MeshLambertMaterial({
    color: 0x2D4671,
    //map: THREE.ImageUtils.loadTexture(STANTON_PLANET.texture),
    //shading: THREE.FlatShading
})

export const loadDAEModel = (sketch,modelName,type='station') => {
    loaderDAE.load(
        // resource URL
        `models/${modelName}.dae`,
        // called when resource is loaded
        function(data) {
            data.scene.traverse(function(node) {
                if (node.material) {
                    node.material.side = THREE.DoubleSide;
                }
            });
            data.scene.scale.set(1, 1, 1)
            data.scene.updateMatrix();
            sketch.meshesDAE = {
                [modelName]: data.scene,
                ...sketch.meshesDAE,
            }
            if(type=='station'){
                addStations(sketch, modelName);
            }
        },
        // called when loading is in progresses
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // called when loading has errors
        function(error) {
            console.log('An error happened', error);
        }
    );
}

const addStation = (sketch,modelName,stationData) => {
    var station = sketch.meshesDAE[modelName].clone()
    var reductorCoordinates = sketch.reductorCoordinates;
    station.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = stationMaterial;
        }
    });
    stationData.position = {
        x: stationData.position.x * reductorCoordinates,
        y: stationData.position.y * reductorCoordinates,
        z: stationData.position.z * reductorCoordinates,
    }
    station.scale.set(1,1,1);
    station.position.set(stationData.position.x, stationData.position.y, stationData.position.z * -1);
    station.material = stationMaterial;
    station.name = stationData.name;
    sketch.scene.add(station);
    sketch.stations.push(station);
    
    var textSprite = sketch.makeTextSprite(station.name, { fontsize: 38, textColor: {r:222, g:227, b:95, a:1.0}} );
    textSprite.position.set(2,1,0);
	station.add( textSprite );
}

const addStations = (sketch, modelName) => {
    var STANTON_PLANETS = getPlanetData();
    STANTON_PLANETS.forEach(planet => {
        planet.stations.forEach(stationData => {
            addStation(sketch, modelName, stationData)
        })
    })
}