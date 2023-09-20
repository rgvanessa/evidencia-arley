/*“Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven 
y se planchen en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes 
requisitos o características
(programa básico-simulación):
a. El cliente escoge entre dos servicios: lavado o planchado.
b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
c. Se solicita la cantidad de prendas.
d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
• Lavado en seco: 2000 por prenda
• Lavado normal: 1500 por prenda
• Planchado: 1800 por prenda
e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.*/


let servicio;
let NumeroPrendas;
let TipoLavado;
let CostoTotal

function LavanYa(){
    servicio = Number(prompt("Ingresa (1) si desea el servicio de lavado o (2) si desea el servicio de planchado"))
    if(servicio == 1){
        TipoLavado = Number(prompt("Ingresa 1 si desea el lavado normal o 2 si desea el lavado en seco"))
        NumeroPrendas = Number(prompt("Ingresa la cantidad de prendas"))
    }if(TipoLavado == 1){
        CostoTotal = NumeroPrendas * 1500
        alert("El precio total del servicio es " + CostoTotal)
    }else if(TipoLavado == 2){
        CostoTotal = NumeroPrendas * 2000
        alert("El precio total del servicio es " + CostoTotal)
    }else if(servicio == 2){
        NumeroPrendas = Number(prompt("Ingresa la cantidad de predas"))
        CostoTotal = NumeroPrendas * 1800 + 3000
        alert("El precio del servicio mas los 3000 del domicilio da un total de " + CostoTotal)
    }
}
LavanYa()