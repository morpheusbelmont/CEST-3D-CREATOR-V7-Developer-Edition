/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 objetos.js


 FUNCIÓN:

 Biblioteca de creación 3D.

 Permite generar objetos
 geométricos educativos.


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */






/* =====================================

        CREAR OBJETO 3D

===================================== */


/*

Uso:

CEST.crear("cubo")

*/


CEST.crear=function(tipo){



let objeto;






// Material inicial CEST


let material =

new THREE.MeshStandardMaterial({


color:"#00ffff",


metalness:0.2,


roughness:0.4


});









/* ================================
             CUBO
================================ */


if(tipo==="cubo"){



objeto =

new THREE.Mesh(



new THREE.BoxGeometry(

2,

2,

2

),



material



);



}










/* ================================
            ESFERA
================================ */



if(tipo==="esfera"){



objeto =

new THREE.Mesh(



new THREE.SphereGeometry(

1.3,

32,

32

),



material



);



}










/* ================================
           PIRÁMIDE
================================ */



if(tipo==="piramide"){



objeto =

new THREE.Mesh(



new THREE.ConeGeometry(

1.5,

2,

4

),



material



);



}











/* ================================
            CILINDRO
================================ */



if(tipo==="cilindro"){



objeto =

new THREE.Mesh(



new THREE.CylinderGeometry(

1,

1,

2,

32

),



material



);



}











/* ================================
            CASA
================================ */



if(tipo==="casa"){



objeto =

new THREE.Group();




// cuerpo


let base =

new THREE.Mesh(


new THREE.BoxGeometry(

2,

2,

2

),


material


);






// techo


let techo =

new THREE.Mesh(


new THREE.ConeGeometry(

1.8,

1,

4

),


material


);




techo.position.y=1.5;






objeto.add(base);


objeto.add(techo);



}












/* ================================
          ESTRELLA 3D
================================ */


if(tipo==="estrella"){



let forma =

new THREE.Shape();





for(

let i=0;

i<10;

i++

){



let radio =

i%2===0 ? 1.5 : .7;



let angulo =

i*Math.PI/5;




let x =

Math.cos(angulo)

*

radio;




let y =

Math.sin(angulo)

*

radio;





if(i===0){


forma.moveTo(x,y);


}

else{


forma.lineTo(x,y);


}



}





forma.closePath();






objeto =

new THREE.Mesh(



new THREE.ExtrudeGeometry(

forma,

{

depth:.5,

bevelEnabled:true

}

),


material



);



}










/* ================================

      VERIFICACIÓN

================================ */


if(!objeto){



console.error(

"Objeto CEST no encontrado"

);



return;



}









/* ================================

        SOMBRAS

================================ */


objeto.traverse(

function(parte){



if(parte.isMesh){



parte.castShadow=true;



parte.receiveShadow=true;



}



}

);









/* ================================

       AGREGAR A ESCENA

================================ */



CEST.escena.add(

objeto

);








// Guardar selección


CEST.objetoActual=objeto;









// Activar transformador


if(

CEST.seleccionar

){


CEST.seleccionar(

objeto

);


}







return objeto;



};
