/* ==================================================

 CEST ENGINE 1.0

 MÓDULO:
 retos.js


 FUNCIÓN:

 Sistema educativo basado
 en retos STEAM.


 Creado por:

 Lic. Carlos Eduardo Sepúlveda Toro

================================================== */








CEST.retos=[




{


titulo:

"Construcción geométrica",



texto:

"Crea una casa usando cubos y pirámides.",



puntos:100


},





{


titulo:

"Explorador XYZ",



texto:

"Mueve un objeto usando los tres ejes espaciales.",



puntos:150



},





{


titulo:

"Diseñador 3D",



texto:

"Crea una composición usando materiales diferentes.",



puntos:300



}



];









CEST.iniciarReto=function(){





let numero =

Math.floor(

Math.random()

*

CEST.retos.length

);






let reto =

CEST.retos[numero];






alert(

`

🎮 RETO CEST


${reto.titulo}


${reto.texto}



Puntuación:

${reto.puntos} puntos


`

);





};
