/*Un sistema de voto electrónico es una aplicación informática diseñada para permitir
a los votantes emitir sus votos de forma electrónica. Hacer un programa en JavaScript que 
cumpla los siguientes requisitos o características (programa básico-simulación):
a. La cantidad de votantes son 10 personas
b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
c. El sistema debe ir sumando los votos de cada candidato.
d. El sistema debe arrojar el ganador y perdedor de la votación */

let diego = [0]
let maria = [0]
let votantes = 10


function contadorDevotos(){
    for(let i = 0; i<= votantes; i++){
        let voto = prompt("Por quien desea votar: (1)para Ana Maria Suarez o (2)para Diego Acero")
        if(voto == 1){
            voto = diego++
        }else if(voto == 2){
            voto = maria++
        }else{
            alert("voto invalido")
        }
    }
    if(diego < maria ){
        alert("El ganador es Ana Maria Suarez")
    }else if(diego > maria){
        alert("El Ganador es Diego Acero")
    }else{
        alert("Empate")
}
}
contadorDevotos()


