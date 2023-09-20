/*Una pizzería “Italiana pizza” es un establecimiento que ofrece comida preparada principalmente
a base de pizza, sándwiches y ensaladas. Hacer un programa en JavaScript que cumpla los siguientes 
requisitos o características
(programa básico-simulación):
a. se muestra al usuario un menú de opciones así: 1. Pizza 2. Sándwiches 3 ensaladas
b. Dependiendo de la opción seleccionada (producto escogido) se pide la cantidad de porciones.
• Pizza a 7000 por unidad
• Sándwich a 5000 unidad
• Ensalada a 15000 unidad
c. Se le pide al usuario si desea agregar salsa que vale 3000.
d. El sistema indica el costo que paga el cliente por su producto. */

let PizzaUnidad = 7000
let ensalada = 15000
let Sandwiches = 5000
let valorAdicionalSalsa = 3000
let valorAdicionalNoSalsa = 0
let precioTotal;

let carta = parseInt(prompt("Que deseas: elige (1)Pizza, (2)Sandwiches, (3)Ensaladas"))
let cantidadPorciones = Number(prompt("Ingresa la cantidad de porciones que desea")) 
let salsa = prompt("Deseas agregar salsa? Recuerda que esto tiene un valor adicional de 3000 ")

function pizzeria(){
    if(carta == 1 && salsa == "si"){
        precioTotal = PizzaUnidad * cantidadPorciones + valorAdicionalSalsa
        alert("El precio total de su pedido mas los 3000 adicionales de la salsa es: " + precioTotal)
    }else if(carta == 2 && salsa == "si"){
        precioTotal = Sandwiches * cantidadPorciones + valorAdicionalSalsa
        alert("El precio total de su pedido mas los 3000 adicionales de la salsa es: " + precioTotal)
    }else if(carta == 3 && salsa == "si"){
        precioTotal = ensalada * cantidadPorciones + valorAdicionalSalsa
        alert("El precio total de su pedido mas los 3000 adicionales de la salsa es: " + precioTotal)
    }else if(carta == 1 && salsa == "no"){
        precioTotal = PizzaUnidad * cantidadPorciones + valorAdicionalNoSalsa
        alert("El precio total de su pedido es: " + precioTotal)
    }else if(carta == 2 && salsa == "no"){
        precioTotal = Sandwiches * cantidadPorciones + valorAdicionalNoSalsa
        alert("El precio total de su pedido es: " + precioTotal)
    }else if(carta == 3 && salsa == "no"){
        precioTotal = ensalada * cantidadPorciones + valorAdicionalNoSalsa
        alert("El precio total de su pedido es: " + precioTotal)
    }         
}
pizzeria()