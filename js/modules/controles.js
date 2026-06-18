/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 controles.js


 FUNCIÓN:

 Control espacial:

 - Cámara
 - Movimiento
 - Rotación
 - Escala


================================================== */








// Variables

CEST.orbita=null;


CEST.transformador=null;








/* ==================================

       CREAR CONTROLES

================================== */


CEST.crearControles=function(){







// Cámara orbital


CEST.orbita =

new THREE.OrbitControls(



CEST.camara,


CEST.renderer.domElement



);





CEST.orbita.enableDamping=true;








// Herramienta XYZ


CEST.transformador =

new THREE.TransformControls(



CEST.camara,


CEST.renderer.domElement



);








CEST.escena.add(

CEST.transformador

);








// Evitar conflicto cámara/mover


CEST.transformador

.addEventListener(

"dragging-changed",


function(event){



CEST.orbita.enabled =

!event.value;



}


);




};









/* ==================================

       SELECCIONAR OBJETO

================================== */


CEST.seleccionar=function(objeto){



CEST.objetoActual=objeto;





if(

CEST.transformador

){



CEST.transformador.attach(

objeto

);



}




};










/* ==================================

       MODOS BLENDER

================================== */



CEST.mover=function(){


CEST.transformador.setMode(

"translate"

);


};






CEST.rotar=function(){


CEST.transformador.setMode(

"rotate"

);


};






CEST.escalar=function(){


CEST.transformador.setMode(

"scale"

);


};
