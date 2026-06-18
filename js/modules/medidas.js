/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 medidas.js


 FUNCIÓN:

 Sistema educativo
 de medición espacial.


 Calcula:

 X = Ancho

 Y = Altura

 Z = Profundidad


 Conversión:

 Unidad 3D
 centímetros
 píxeles


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */







CEST.medir=function(){







if(!CEST.objetoActual){


return;


}








/*

Caja invisible alrededor
del modelo.

*/


let caja =

new THREE.Box3()

.setFromObject(

CEST.objetoActual

);









let medida =

new THREE.Vector3();






caja.getSize(

medida

);










// Conversión educativa


let x =

(

medida.x * 10

)

.toFixed(1);





let y =

(

medida.y * 10

)

.toFixed(1);





let z =

(

medida.z * 10

)

.toFixed(1);











let panel =

document.getElementById(

"medidas"

);








if(panel){



panel.innerHTML=


`

<hr>

📐 MEDIDAS CEST


<br><br>


X Ancho:

${x} cm

/


${x*10} px


<br>


Y Altura:

${y} cm

/

${y*10} px


<br>


Z Profundidad:

${z} cm

/

${z*10} px


`;



}





};
