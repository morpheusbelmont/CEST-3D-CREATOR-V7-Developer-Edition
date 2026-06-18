/* ==================================================

 CEST ENGINE 1.0
 Creative Educational System Technology


 Archivo:
 cest.engine.js


 FUNCIÓN:

 Núcleo principal del motor CEST.

 Administra:

 - Escena 3D
 - Cámara
 - Render
 - Luces
 - Grid XYZ
 - Animación


 Tecnología creada por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */






/* =========================================

      CREACIÓN DEL OBJETO GLOBAL

========================================= */


/*

CEST será nuestra librería.

Ejemplo:

CEST.crear("cubo")

CEST.color("#00ffff")

*/


const CEST = {};








/* =========================================

        VARIABLES DEL MOTOR

========================================= */



// Mundo 3D

CEST.escena = null;



// Cámara del usuario

CEST.camara = null;



// Render WebGL

CEST.renderer = null;



// Objeto seleccionado

CEST.objetoActual = null;









/* =========================================

            INICIAR SISTEMA

========================================= */



CEST.iniciar=function(){



console.log(

"🚀 CEST ENGINE ACTIVADO"

);




// Crear mundo

CEST.crearEscena();



// Crear cámara

CEST.crearCamara();



// Crear pantalla 3D

CEST.crearRenderer();



// Luces

CEST.crearLuces();



// Piso y coordenadas

CEST.crearGrid();




// Controles si existen

if(

typeof CEST.crearControles === "function"

){


CEST.crearControles();


}




// Objeto inicial

if(

typeof CEST.crear === "function"

){


CEST.crear("cubo");


}




// Animación

CEST.animar();



};











/* =========================================

            CREAR ESCENA

========================================= */



CEST.crearEscena=function(){



CEST.escena =

new THREE.Scene();




CEST.escena.background =

new THREE.Color(

0x061010

);



};










/* =========================================

            CREAR CÁMARA

========================================= */



CEST.crearCamara=function(){



CEST.camara =

new THREE.PerspectiveCamera(


60,


window.innerWidth /

window.innerHeight,


0.1,


1000


);




CEST.camara.position.set(

6,

5,

8

);



};









/* =========================================

              RENDER WEBGL

========================================= */



CEST.crearRenderer=function(){



CEST.renderer =

new THREE.WebGLRenderer({



antialias:true,



preserveDrawingBuffer:true



});






CEST.renderer.setSize(


window.innerWidth,


window.innerHeight



);





// Sombras

CEST.renderer.shadowMap.enabled=true;






// Identificador CSS

CEST.renderer.domElement.id =

"canvasCEST";






// Agregar pantalla al HTML

document.body.appendChild(


CEST.renderer.domElement


);



};










/* =========================================

                LUCES

========================================= */



CEST.crearLuces=function(){





// Luz general

let ambiente =

new THREE.AmbientLight(

0xffffff,

0.5

);



CEST.escena.add(

ambiente

);








// Luz principal

let sol =

new THREE.DirectionalLight(

0xffffff,

2

);




sol.position.set(

5,

10,

5

);



sol.castShadow=true;



CEST.escena.add(

sol

);



};









/* =========================================

          GRID Y EJES XYZ

========================================= */


CEST.crearGrid=function(){






// Cuadrícula estilo Blender

let grid =

new THREE.GridHelper(

20,

20,

0x00ffff,

0x333333

);





CEST.escena.add(

grid

);






// Ejes espaciales


let ejes =

new THREE.AxesHelper(

5

);




CEST.escena.add(

ejes

);



};










/* =========================================

          ACTUALIZAR PANTALLA

========================================= */



CEST.animar=function(){



requestAnimationFrame(

CEST.animar

);






// Actualizar cámara

if(

CEST.orbita

){


CEST.orbita.update();


}






// Actualizar medidas


if(

typeof CEST.medir==="function"

){


CEST.medir();


}







// Renderizar


CEST.renderer.render(


CEST.escena,


CEST.camara


);



};









/* =========================================

        AJUSTAR PANTALLA RESPONSIVE

========================================= */


window.addEventListener(

"resize",

function(){



if(

!CEST.renderer

){

return;

}



CEST.camara.aspect =

window.innerWidth /

window.innerHeight;




CEST.camara

.updateProjectionMatrix();




CEST.renderer.setSize(


window.innerWidth,


window.innerHeight


);



}



);
