/*Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, 
como lápices, libretas, cuadernos, pizarras, muebles, etc. Se utilizan para decorar y personalizar 
los productos de una manera barata y sencilla. 
Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
(programa básico-simulación):
a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
• Costo pequeño es de 4000 y costo del grande 6000
b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10;
Sino debe indicarse al usuario un numero correcto.
c. El sistema debe arrojar cuanto es el costo total para pagar*/


let tamañoStiker = Number(prompt("Ingrese el tamaño (1)grande o (2)pequeño"))
let cantidadStiker = Number(prompt("Ingrese la cantidad de stikers (SOLO SE PERMITEN DE 1 A 10 UNIDADES)"))
let costototal;
let precio;
if(tamañoStiker == 1){
    precio = 6000
}else if(tamañoStiker == 2){
    precio = 4000
}else{
    alert("Tamaño invalido")
}
if(cantidadStiker < 10){
    costototal = precio * cantidadStiker
    alert("La precio total a pagar es: " + costototal)
}else if(cantidadStiker > 10){
    alert("ERROR: Solo se permiten 1 a 10 unidades")
}