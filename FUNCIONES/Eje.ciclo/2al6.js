/*Realizar un programa en JavaScript que imprima los números del 1 al 6 
sin imprimir el número 5, usando ciclos.*/

function ciclo (){
    for(let i = 1; i<=6; i++){
        if(i !== 5){
            console.log(i)
        }
    }
}
ciclo()

let i = 1
function ciclo(){
    while(i<=6){
        if(i !== 5){
        console.log(i)
    }
    i++;
    }
}
ciclo()