import * as THREE from "three";

export const createStar = (sketch) => {
    var starColor = (function() {
            //var colors = [0xFFFF00, 0x559999, 0xFF6339, 0xFFFFFF];
            var colors = [0xFFFF00];
            return colors[Math.floor(Math.random() * colors.length)];
        })(),
        size = 10 + Math.random() * 7;

    var star = new THREE.Mesh(
        new THREE.SphereGeometry(size, 20, 20),
        new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
        })
    );
    star.castShadow = false;
    sketch.star = star;
    sketch.scene.add(star);

    for (var i = 1, scaleX = 1.1, scaleY = 1.1, scaleZ = 1.1; i < 5; i++) {
        var starGlow = new THREE.Mesh(
            new THREE.SphereGeometry(7, 15, 15),
            new THREE.MeshBasicMaterial({
                color: starColor,
                transparent: true,
                opacity: 0.5
            })
        );
        starGlow.castShadow = false;
        scaleX += 0.4 + Math.random() * .5;
        scaleY += 0.4 + Math.random() * .5;
        scaleZ += 0.4 + Math.random() * .5;
        starGlow.scale.set(scaleX, scaleY, scaleZ);
        starGlow.origScale = {
            x: scaleX,
            y: scaleY,
            z: scaleZ
        };
        sketch.glows.push(starGlow);
        sketch.scene.add(starGlow);
    }



    //Lights
    var light1 = new THREE.PointLight(starColor, 2, 0, 0);

    light1.position.set(0, 0, 0);
    sketch.scene.add(light1);

    var light2 = new THREE.AmbientLight(0xFFFFFF, 0.8);
    sketch.scene.add(light2);
}

export const starRotation = (sketch) => {
    sketch.star.rotation.set(0, sketch.time, 0);
    sketch.glows.forEach( (glow) => {
        glow.scale.set(
            Math.max(glow.origScale.x - .2, Math.min(glow.origScale.x + .2, glow.scale.x + (Math.random() > .5 ? 0.005 : -0.005))),
            Math.max(glow.origScale.y - .2, Math.min(glow.origScale.y + .2, glow.scale.y + (Math.random() > .5 ? 0.005 : -0.005))),
            Math.max(glow.origScale.z - .2, Math.min(glow.origScale.z + .2, glow.scale.z + (Math.random() > .5 ? 0.005 : -0.005)))
        );
        glow.rotation.set(0, sketch.time, 0);
    })
}
