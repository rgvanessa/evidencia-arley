/*La biblioteca municipal de Armenia, necesita un sistema de Gestión de multas.
Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
(programa básico-simulación):
a. Se pregunta al usuario si es devolución o perdida.
b. Se le pide al usuario de la biblioteca que indique la cantidad de días de prestamo.
c. La cantidad de libros prestados o revistas
• Revistas 500 pesos día.
• Libro 600 pesos día.
d. Si es perdida, debe de pagar 10000 por ejemplar*/

let usuario = prompt("Devolucion o Perdidad?")
let diasPrestamo = Number(prompt("Ingrese la cantidad de dias de prestamo"))
let Revistas = Number(prompt("ingrese la cantidad de revistas que presto"))
let Libros = Number(prompt("Ingrese la cantidad de libros que presto"))
let precioLibro = 500
let preciorevista = 600
let multaPerdida = 10000
let precioTotal;

function biblioteca(){
    if(usuario == "devolucion" && diasPrestamo == diasPrestamo && Revistas == Revistas && Libros == Libros){
        precioTotal = (precioLibro * Libros + Revistas * preciorevista) * diasPrestamo
        alert("El precio total es: " + precioTotal)
    }else if(usuario == "perdida" && diasPrestamo == diasPrestamo && Revistas == Revistas && Libros == Libros){
        precioTotal = (precioLibro * Libros + Revistas * preciorevista) * diasPrestamo + multaPerdida
        alert(`Debe pagar el total del tiempo que tuvo los libros o las revistas mas 10000 de multa: ${precioTotal}`)
    }
}
biblioteca()