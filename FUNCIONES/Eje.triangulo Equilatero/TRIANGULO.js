/**Para verificar si un triángulo es equilátero, se deben comprobar que los tres lados
del triángulo tienen la misma longitud.
a. Pedir al usuario los lados y determinar si es equilátero o no */

let Lado1 = parseInt(prompt("Ingrese la medida de la primera esquina"))
let Lado2 = parseInt(prompt("Ingrese la medida de la segunda esquina"))
let Lado3 = parseInt(prompt("Ingrese la medida de la tercera esquina"))

function triangulo(){
    if(Lado1 == Lado2 && Lado2 == Lado3){
        alert("El triangulo es equilatero")
    }else{
        alert("El triangulo no es equilatero")
    }
}
triangulo()