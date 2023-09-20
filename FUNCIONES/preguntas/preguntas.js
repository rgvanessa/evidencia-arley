/*Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento
y comprensión de un tema o disciplina específica. Hacer un programa en JavaScript que cumpla
los siguientes requisitos o características
(programa básico-simulación):
a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
c. Si la opción es correcta se suma 10 puntos por cada pregunta.
d. Se debe mostrar los resultados del examen.*/

let puntaje = [0]
let pregunta1 = prompt("2+2 es igual a 4? falso o verdadero")
let pregunta2;
let pregunta3;
let pregunta4;
let pregunta5;

function examen(){
    if(pregunta1 == "verdadero"){
        pregunta1 = puntaje++
        alert("Tu respuesta es correcta ganaste 10 puntos")
    }else if(pregunta1 == "falso"){
        alert("Tu respuesta es erronea")
    }
    pregunta2 = prompt("2*2 es igual a 2? falso o verdadero")
    if(pregunta2 == "falso"){
        pregunta2 = puntaje++
        alert("Tu respuesta es correcta")
    }else if(pregunta2 == "verdadero"){
        alert("Tu respuesta es erronea")
    }
    pregunta3 = prompt("2 es mayor a 1? falso o verdadero")
    if(pregunta3 == "verdadero"){
        pregunta3 = puntaje++
        alert("Tu respuesta es correcta")
    }else if(pregunta3 == "falso"){
        alert("Tu resouesta es erronea")
    }
    pregunta4 = prompt("1+1 es igual a 11? verdadero o falso")
        if(pregunta4 == "falso"){
            pregunta4 = puntaje++
            alert("Tu respuesta es correcta")
        }else if(pregunta4 == "verdadero"){
            alert("tu respuesta es erronea")
        }
    pregunta5 = prompt("1 es igual a 5? falso o verdadero")
    if(pregunta5 == "falso"){
        pregunta5 = puntaje++
        alert(`Tu respuesta es correcta y tienes un total de ${puntaje} puntos`)
    }else if(pregunta5 == "verdadero"){
        alert(`Tu respuesta es erronea y tienes un puntaje de ${puntaje}`)
    }
}
examen()