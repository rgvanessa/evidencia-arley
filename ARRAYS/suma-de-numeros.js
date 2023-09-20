/*Suma de elementos : Crea una función que tome un array de números como argumento y devuelva la suma de todos los elementos.*/

let numbers = [1,2,3,4,5,6,7,8,9]
let suma = 0
function sumaNumeros(){
    for(let i = 0; i < numbers.length; i++){
        suma += numbers[i]
    }
}
sumaNumeros()
console.log(suma)