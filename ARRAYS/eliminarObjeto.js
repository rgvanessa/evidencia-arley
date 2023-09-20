/*Eliminar duplicados : Crea una función que tome un arreglo como argumento*/

let numbers = [1,1,2,3,4,5]
let datosEliminados = 0

function eliminarDuplicados(){
    let newnumbers = [...new Set(numbers)]
    return newnumbers
}

datosEliminados=eliminarDuplicados()
console.log(datosEliminados)