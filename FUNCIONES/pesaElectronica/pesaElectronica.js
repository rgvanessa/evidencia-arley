/*hacer en JavaScript el sistema de administración de pago para una pesa electrónica.
a. El usuario solo puede ingresar monedas o billetes
• Si es moneda, aceptar monedas de 500, 1000 solamente.
• Si es billete, de 2000 y 5000.
b. El servicio vale 500 pesos, el sistema debe indicar si falta dinero, si no tiene que 
devolver o el valor de la devolución.
c. ¡Mostrar un mensaje “vuelve pronto!”*/

let producto = 6500
let moneda_1 = 500
let moneda_2 = 100
let billete_1 = 2000
let billete_2 = 5000
let pago = Number(prompt("ingrese su pago"))
let precioTotal;
let faltante;

function pesaElectronica() {
    if(pago == producto){
        alert("No hay devuelta")
    }else if(pago <= producto){
        faltante = producto - pago
        alert(`Falta dinero, un total de ${faltante}`)
    }else if(pago >= producto){
        precioTotal = pago - producto
        alert(`Su cambio es de ${precioTotal}`)
    }
}
pesaElectronica()