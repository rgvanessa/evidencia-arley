/*Encontrar el número mayor : Crea una función que tome una matriz de números como argumento y devuelva el número mayor.*/

let array = [1,20,2]
let mayor = []

function identificarMayor(){
    for(let i=1; i < array.length; i++){
        if(array[i] > mayor){
            mayor=array[i]
            console.log(`El numero mayor es: ${mayor}`)
        }
    }
}
identificarMayor()