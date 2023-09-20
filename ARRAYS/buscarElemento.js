/*Buscar elemento: Escribe una función que tome un arreglo true si el valor se encuentra en el array, o false si no se encuentra.*/

let objetos = ["carro","moto","cicla"];
let buscarObjeto = "avion"

function detective(){
    if(objetos.includes(buscarObjeto)){
        console.log(true)
    }else{
        console.log(false)
    }
}
detective()
