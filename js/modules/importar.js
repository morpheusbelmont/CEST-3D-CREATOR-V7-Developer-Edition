/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 importar.js


 FUNCIÓN:

 Importar modelos creados
 en otros programas 3D.


 Compatible:

 - Blender
 - GLB
 - GLTF


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */






CEST.importar=function(event){






let archivo =

event.target.files[0];





if(!archivo){


return;


}







/*
Ruta temporal del archivo
*/


let ruta =

URL.createObjectURL(

archivo

);








let loader =

new THREE.GLTFLoader();








loader.load(



ruta,






function(gltf){






let modelo =

gltf.scene;






modelo.position.set(

0,

0,

0

);







modelo.traverse(

function(parte){






if(parte.isMesh){



parte.castShadow=true;



parte.receiveShadow=true;



}



}



);








CEST.escena.add(

modelo

);








CEST.objetoActual=modelo;








if(

CEST.seleccionar

){


CEST.seleccionar(

modelo

);


}








},








undefined,







function(error){



console.error(

"Error importando modelo",

error

);



}




);




};
