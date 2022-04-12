import * as THREE from "three";



export const getPlanetData = () => {
    var STANTON_PLANETS = [
        {
            'name': 'Crusader',
            'position': {
                    'x': -189.62174,
                    'y': 0,
                    'z': -26.64960
            },
            'color': 0xFFFFFF,
            'texture': '/images/planets/STANTON/Planet_Stanton2.jpg',
            'size': 3,
            'scaleZoom': 6,
            'orbital_speed': 0,
            'atmo': 1,
            'moons': [
                {
                    'name': 'Yela',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': -190.22916,
                        'y': 0,
                        'z': -26.13996
                    }
                },
                {
                    'name': 'Daymar',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': -189.30539,
                        'y': 0,
                        'z': -26.10158
                    }
                },
                {
                    'name': 'Cellin',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': -189.87611,
                        'y': 0,
                        'z': -27.09009
                    }
                }
            ],
            'stations': [
                {
                    'name': 'CRU-L1',
                    'color':'',
                    'position': {
                        'x': -170.65959,
                        'y': 0,
                        'z': -23.98467
                    },
                },
                {
                    'name': 'Cru-L4',
                    'color':'',
                    'position': {
                        'x': -71.73162,
                        'y': 0,
                        'z': -177.54207
                    },
                },
                {
                    'name': 'CRU-L5',
                    'color':'',
                    'position': {
                        'x': -117.88995,
                        'y': 0,
                        'z': 150.89246
                    },
                },
            ]
        },
        {
            'name': 'Hurston',
            'position': {
                    'x': 128.50456,
                    'y': 0,
                    'z': 0
            },
            'color': 0xFFFFFF,
            'texture': '/images/planets/STANTON/Planet_Stanton3.jpg',
            'size': 3,
            'scaleZoom': 1,
            'orbital_speed': 0,
            'atmo': 1,
            'moons': [
                {
                    'name': 'Ita',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 128.30195,
                        'y': 0,
                        'z': 1.14912
                    }
                },
                {
                    'name': 'Abderdeen',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 129.05757,
                        'y': 0,
                        'z': 0.40955
                    }
                },
                {
                    'name': 'Arial',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 128.92673,
                        'y': 0,
                        'z': -0.31476
                    }
                },
                {
                    'name': 'Magda',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 127.92686,
                        'y': 0,
                        'z': -0.74464
                    }
                }
            ],
            'stations': [
                {
                    'name': 'HUR-L1',
                    'color':'',
                    'position': {
                        'x': 115.65410,
                        'y': 0,
                        'z': 0
                    },
                },
                {
                    'name': 'HUR-L2',
                    'color':'',
                    'position': {
                        'x': 141.35497,
                        'y': 0,
                        'z': 0
                    },
                },
                {
                    'name': 'HUR-L3',
                    'color':'',
                    'position': {
                        'x': -128.50451,
                        'y': 0,
                        'z': 0
                    },
                },
                {
                    'name': 'HUR-L4',
                    'color':'',
                    'position': {
                        'x': 64.25226,
                        'y': 0,
                        'z': 111.28825
                    },
                },
                {
                    'name': 'HUR-L5',
                    'color':'',
                    'position': {
                        'x': 64.25238,
                        'y': 0,
                        'z': -111.28832
                    },
                }
            ]
        },
        {
            'name': 'Arccorp',
            'position': {
                    'x': 185.87664,
                    'y': 0,
                    'z': -221.5191
            },
            'color': 0xFFFFFF,
            'texture': '/images/planets/STANTON/Planet_Stanton.jpg',
            'size': 3,
            'scaleZoom': 1,
            'orbital_speed': 0,
            'atmo': 1,
            'moons': [
                {
                    'name': 'Lyria',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 187.03607,
                        'y': 0,
                        'z': -221.21650
                    }
                },
                {
                    'name': 'Wala',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 183.79649,
                        'y': 0,
                        'z': -220.00466
                    }
                }
            ],
            'stations': [
                {
                    'name': 'ARC-L1',
                    'color':'',
                    'position': {
                        'x': 167.29134,
                        'y': 0,
                        'z': -199.37008
                    },
                },
            ]
        },
        {
            'name': 'Microtech',
            'position': {
                    'x': 224.62016,
                    'y': 0,
                    'z': 371.85625
            },
            'color': 0xFFFFFF,
            'texture': '/images/planets/STANTON/Planet_Stanton4.jpg',
            'size': 3,
            'scaleZoom': 1,
            'orbital_speed': 0,
            'atmo': 1,
            'moons': [
                {
                    'name': 'Calliope',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 223.98370,
                        'y': 0,
                        'z': 371.68839
                    }
                },
                {
                    'name': 'Clio',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 224.76728,
                        'y': 0,
                        'z': 370.91018
                    }
                },
                {
                    'name': 'Euturpe',
                    'color': 0xFFFFFF,
                    'position': {
                        'x': 224.88110,
                        'y': 0,
                        'z': 370.81124
                    }
                }
            ],
            'stations': [
                {
                    'name': 'MIC-L1',
                    'color':'',
                    'position': {
                        'x': 202.15827,
                        'y': 0,
                        'z': 334.67069
                    },
                },
            ]
        },
    ]

    return STANTON_PLANETS
}

export const addPlanets = (sketch) => {
    var reductorCoordinates = sketch.reductorCoordinates;
    var sk = sketch;
    var API_PLANETS = getPlanetData();
    for (var p = 0; p < API_PLANETS.length; p++) {
        var API_PLANET = API_PLANETS[p];
        API_PLANET.position = {
            x: API_PLANET.position.x * reductorCoordinates,
            y: API_PLANET.position.y * reductorCoordinates,
            z: API_PLANET.position.z * reductorCoordinates,
        }
        var planetGeom = new THREE.Mesh(
                new THREE.SphereGeometry(API_PLANET.size, 20, 20),
                new THREE.MeshLambertMaterial({
                    color: API_PLANET.color,
                    map: new THREE.TextureLoader().load(API_PLANET.texture)
                    //shading: THREE.FlatShading
                })
            ),
            planet = new THREE.Object3D();

        planet.add(planetGeom);
        planet.scaleZoom = API_PLANET.scaleZoom;

        if (API_PLANET.atmo) {
            var atmoGeom = new THREE.Mesh(
                new THREE.SphereGeometry(API_PLANET.size + 0.3, 20, 20),
                new THREE.MeshLambertMaterial({
                    color: API_PLANET.color,
                    //shading: THREE.FlatShading,
                    transparent: true,
                    opacity: 0.2
                })
            );
            atmoGeom.castShadow = false;
            planet.add(atmoGeom);
        }

        planet.orbit = Math.sqrt((API_PLANET.position.x * API_PLANET.position.x) + ((API_PLANET.position.z * -1) * (API_PLANET.position.z * -1)))

        planet.orbitRadius = planet.orbit;
        planet.rotSpeed = 0.005 + Math.random() * 0.01;
        planet.rotSpeed *= Math.random() < .10 ? -1 : 1;
        planet.rot = Math.random();
        planet.orbitSpeed = (0.02 - p * 0.0048) * API_PLANET.orbital_speed;
        //planet.orbit = Math.random() * Math.PI * 2;
        
        planet.position.set(API_PLANET.position.x, API_PLANET.position.y, API_PLANET.position.z * -1);
        

        sketch.planets.push(planet);


        planet.cursor = 'pointer';
        planet.name = API_PLANET.name;
        planet.planetColor = API_PLANET.color;
        planet.planetSize = API_PLANET.size;
        sketch.scene.add(planet);
        var textSprite = sketch.makeTextSprite(planet.name, { fontsize: 44, textColor: {r:255, g:255, b:255, a:1.0}} );
        textSprite.position.set(2,5,0);
	    planet.add( textSprite );
        
        planet.addEventListener('mousemove',function(ev){
            //setPlanetInfoPosition();
        })
        planet.addEventListener('mouseover', function(ev) {
            document.body.style.cursor = 'pointer';
            sk.insidePlanet = this;
            console.log('mouseover into planet',this.name);
            //setPlanetInfo(this);
                //console.log('%c' + planet.name + '%c => mouseover', 'color: #fff; background: #41b882; padding: 3px 4px;', 'color: #41b882; background: #fff;');
        });

        planet.addEventListener('dblclick', function(ev) {
            sk.centerToObjectAndZoom(sk,this)
        })

        planet.addEventListener('mouseout', function(ev) {
            sk.insidePlanet = false;
            //planetCard.hide();
            document.body.style.cursor = 'default';
        });
        sketch.interactionManager.add(planet);


        var orbit = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints(
                new THREE.Path().absarc(0, 0, planet.orbitRadius, 0, Math.PI * 2).getPoints(90)
            ),
            new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.45 } )
        )

        orbit.rotation.x = THREE.Math.degToRad(90);
        sketch.scene.add(orbit);

        API_PLANET.moons.forEach(moon => {
            moon.position = {
                x: moon.position.x * 0.5,
                y: moon.position.y * 0.5,
                z: (moon.position.z * 0.5) * -1,
            }
            var moonGeom = new THREE.Mesh(
                new THREE.SphereGeometry(1, 20, 20),
                new THREE.MeshLambertMaterial({
                    color: moon.color,
                    //shading: THREE.FlatShading
                })
            ),
            moon3D = new THREE.Object3D();

            moon3D.add(moonGeom);
            moon3D.name = moon.name
            moon3D.scale.set(0.0015 , 0.0015, 0.0015)
            moon3D.position.set( moon.position.x, moon.position.y, moon.position.z)
            sketch.scene.add(moon3D);
            //moon3D.orbitRadius = Math.sqrt((Math.abs(planet.position.x - moon3D.position.x)*Math.abs(planet.position.x - moon3D.position.x)) + (Math.abs(planet.position.z - moon3D.position.z)*Math.abs(planet.position.z - moon3D.position.z)))
            moon3D.orbitRadius = moon3D.position.distanceTo(planet.position)


            var orbit = new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(
                    new THREE.Path().absarc(0, 0, moon3D.orbitRadius, 0, Math.PI * 2).getPoints(90)
                ),
                new THREE.LineBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.45 } )
            )
            orbit.rotation.x = THREE.Math.degToRad(90);
            orbit.position.set(planet.position.x,planet.position.y,planet.position.z)
   
            sketch.scene.add(orbit);
            var textSprite = sketch.makeTextSprite(moon.name, { fontsize: 60, textColor: {r:255, g:255, b:255, a:1.0}} );
            textSprite.position.set(2,5,0);
            moon3D.add( textSprite );

            moon3D.addEventListener('dblclick', function(ev) {
                sk.centerToObjectAndZoom(sk,this)
            })
            moon3D.addEventListener('mouseover', function(ev) {
                document.body.style.cursor = 'pointer';
            });

            moon3D.addEventListener('mouseout', function(ev) {
                document.body.style.cursor = 'default';
            });
            sketch.interactionManager.add(moon3D);
        })
    }
}