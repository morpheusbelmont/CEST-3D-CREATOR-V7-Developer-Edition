/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 exportar.js


 FUNCIÓN:

 Generar evidencias digitales.

 Permite:

 - Capturar imagen PNG
 - Guardar proyecto JSON


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */






/* =================================

        CAPTURA PNG

================================= */


CEST.capturarPNG=function(){



/*
Actualizamos render antes
de capturar.
*/


CEST.renderer.render(

CEST.escena,

CEST.camara

);






/*
Convertimos Canvas WebGL
en imagen.
*/


let imagen =

CEST.renderer.domElement

.toDataURL(

"image/png"

);






let enlace =

document.createElement(

"a"

);




enlace.href = imagen;




enlace.download =

"CEST_3D_CREATOR.png";




enlace.click();



};










/* =================================

        GUARDAR PROYECTO

================================= */



CEST.guardar=function(){






let datos=[];







/*
Recorre todos los elementos
del mundo 3D.
*/


CEST.escena.children.forEach(



function(objeto){






if(

objeto.isMesh

||

objeto.type==="Group"

){







datos.push({





tipo:

objeto.type,





posicion:

{

x:objeto.position.x,

y:objeto.position.y,

z:objeto.position.z

},






rotacion:

{

x:objeto.rotation.x,

y:objeto.rotation.y,

z:objeto.rotation.z

},







escala:

{

x:objeto.scale.x,

y:objeto.scale.y,

z:objeto.scale.z

}



});







}




}



);








let archivo =

new Blob(


[

JSON.stringify(

datos,

null,

2

)

],



{

type:

"application/json"

}


);








let enlace =

document.createElement(

"a"

);





enlace.href =

URL.createObjectURL(

archivo

);





enlace.download =

"Proyecto_CEST.json";






enlace.click();






};
