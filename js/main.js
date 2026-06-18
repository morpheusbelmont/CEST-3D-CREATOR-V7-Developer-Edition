/* ==================================================

 CEST 3D CREATOR V7


 ARCHIVO:
 main.js


 FUNCIÓN:

 Arranque general
 de la aplicación.


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */








document.addEventListener(

"DOMContentLoaded",



function(){






console.log(

"Iniciando CEST..."

);








let mensajes=[



"Cargando motor CEST...",


"Activando entorno XYZ...",


"Cargando herramientas 3D...",


"Preparando laboratorio educativo..."



];







let posicion=0;







let texto =

document.getElementById(

"mensajeCarga"

);








let tiempo =

setInterval(



function(){






texto.innerHTML =

mensajes[posicion];







posicion++;







if(

posicion>=mensajes.length

){






clearInterval(

tiempo

);







setTimeout(


function(){






document

.getElementById(

"preload"

)

.style.display="none";








document

.getElementById(

"app"

)

.style.display="block";








// ARRANCA EL MOTOR


CEST.iniciar();








},1000);





}





},1000);





}


);
