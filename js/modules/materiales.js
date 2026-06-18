/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 materiales.js


 FUNCIÓN:

 Controla la apariencia
 visual de los objetos.


 Permite:

 - Cambiar colores
 - Crear metal
 - Crear cristal
 - Crear material mate


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */







/* =================================

        CAMBIAR COLOR

================================= */


/*

Uso:

CEST.color("#ff0000")

*/


CEST.color=function(colorNuevo){



// Validamos selección


if(!CEST.objetoActual){


console.warn(

"No existe objeto seleccionado"

);


return;


}







/*

Recorremos el objeto.

Sirve también para grupos
como casas o modelos importados.

*/


CEST.objetoActual.traverse(



function(parte){






if(parte.material){



parte.material.color.set(

colorNuevo

);



}



}



);



};










/* =================================

        MATERIAL METÁLICO

================================= */



CEST.metal=function(){



CEST.aplicarMaterial({


metalness:1,


roughness:.15


});



};










/* =================================

        MATERIAL MATE

================================= */



CEST.mate=function(){



CEST.aplicarMaterial({



metalness:0,


roughness:1



});



};











/* =================================

        MATERIAL CRISTAL

================================= */



CEST.cristal=function(){



CEST.aplicarMaterial({



transparent:true,


opacity:.35,


metalness:0,


roughness:0



});



};











/* =================================

       MOTOR DE MATERIALES

================================= */


CEST.aplicarMaterial=function(config){






if(!CEST.objetoActual){


return;


}







CEST.objetoActual.traverse(


function(parte){






if(parte.material){






Object.assign(

parte.material,

config

);







parte.material.needsUpdate=true;






}




}



);



};
