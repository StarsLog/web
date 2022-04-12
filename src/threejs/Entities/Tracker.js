import * as THREE from "three";
import { getCookie } from 'typescript-cookie'
import call2API from "../../app/api";

const loadPointsStatus = {
    logout: false,
    login: false
}

export const getTrackCoordinates = (sketch, event) =>{

    const jwtCookie = getCookie('jwt');
    const loggedIn = (typeof jwtCookie !== 'undefined' && jwtCookie.length)

    console.log('status', loggedIn, loadPointsStatus)
    //Don't reload points if the status is the same between interactions on the session
    if((loggedIn && !loadPointsStatus.login) || (!loggedIn && !loadPointsStatus.logout)){
        loadPointsStatus.login = loggedIn ;
        loadPointsStatus.logout = !loggedIn;
    }else if(! event?.detail?.force){
        return;
    }


    for( var i = sketch.scene.children.length - 1; i >= 0; i--) { 
        let obj = sketch.scene.children[i];
        if(obj.name == 'locator' || obj.name == 'locator_line'){
            sketch.scene.remove(obj); 
        }
    }

    var reductorCoordinates = sketch.reductorCoordinates;
    var iconTexture = new THREE.TextureLoader().load( '/images/Logo_Quantum_Drives.png' );
    var iconMaterial = new THREE.SpriteMaterial( { map: iconTexture } );
    var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });
    
    call2API( data => {
        var points = []
        var dateLog = false;
        var icons = [];
        data.forEach((location,key) => {
            var dateLogActual = new Date(location.date_add);
            if(!dateLog){
                dateLog = dateLogActual;
            }
            if(!sameDay(dateLog,dateLogActual) || data.length == key + 1){
                var geometry = new THREE.BufferGeometry().setFromPoints( points );
                var line = new THREE.Line( geometry, lineMaterial );
                line.name = 'locator_line';
                line.travelDate = dateLog.getFullYear()+'-'+(dateLog.getMonth()+1).toString().padStart(2,'0')+'-'+dateLog.getDate().toString().padStart(2,'0');
                sketch.scene.add( line );
                dateLog = dateLogActual;
                points = [];
                icons = [];
                
            }
            points.push( new THREE.Vector3(location.x * reductorCoordinates, location.z * reductorCoordinates, location.y * reductorCoordinates));
            var iconSprite = createPoint(sketch, location, iconMaterial);
            icons.push(iconSprite);
            
        })
    }, 'GET', 'tracker', jwtCookie)

    printCurrentPosition(sketch, event);
}

export const printCurrentPosition = (sketch, event) => {
    const jwtCookie = getCookie('jwt');
    let obj = sketch.scene.getObjectByName('current_location');
    sketch.scene.remove(obj);

    var iconTexture = new THREE.TextureLoader().load( '/images/current_location.png' );
    var iconMaterial = new THREE.SpriteMaterial( { map: iconTexture } );

    if (typeof jwtCookie !== 'undefined' && jwtCookie.length) {
        call2API(data => {
         createPoint(sketch, data, iconMaterial, 'current_location', 10)
        },'GET', 'tracker/position')
    }
}

const createPoint = (sketch, location, iconMaterial, iconName = 'locator' , initialScale = 10) => {
    var dateLog = new Date(location.date_add);
    var reductorCoordinates = sketch.reductorCoordinates;
    var iconSprite = new THREE.Sprite( iconMaterial );
    iconSprite.name = iconName;
    iconSprite.position.set(location.x * reductorCoordinates, location.z * reductorCoordinates, location.y * reductorCoordinates);
    iconSprite.scale.set(initialScale,initialScale,initialScale);
    iconSprite.cursor = 'pointer';
    iconSprite.trackerId = location.id;
    iconSprite.isLocator = true;
    iconSprite.locatorDate = dateLog.getFullYear()+'-'+(dateLog.getMonth()+1).toString().padStart(2,'0')+'-'+dateLog.getDate().toString().padStart(2,'0');
    iconSprite.locatorTime = dateLog.getHours().toString().padStart(2,'0')+':'+dateLog.getMinutes().toString().padStart(2,'0')+':'+dateLog.getSeconds().toString().padStart(2,'0');
    sketch.locatorPoints.push(iconSprite);
    sketch.scene.add( iconSprite );

    iconSprite.centerLink = (sketch, obj) => {
        //if(!sketch.insidePlanet){
            sketch.centerToObjectAndZoom(sketch,obj);
        //}
    }

    iconSprite.addEventListener('mouseover',function(ev){
        //if(!sketch.insidePlanet){
            document.body.style.cursor = 'crosshair';
        //}
    });

    iconSprite.addEventListener('dblclick', function(ev) {
        this.centerLink(sketch, this);
    }); 

    iconSprite.addEventListener('mouseout', function(ev) {
        document.body.style.cursor = 'default';
    });
    sketch.interactionManager.add(iconSprite);
    return iconSprite;
}

export const sameDay = (d1, d2) => {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
}