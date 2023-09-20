/*El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar 
un carro nuevo o usado. Estos establecimientos generalmente están asociados con una marca de 
automóviles específica y tienen un inventario de vehículos nuevos. Hacer un programa en JavaScript 
que cumpla los siguientes requisitos o características 
(programa básico-simulación):
a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
c. El sistema le mostrara toda la información de cada una de las referencias en particular.*/

let marca = prompt("Ingrese la marca que desea (A.Chevrolet, B.Mazda o C.Renault)")
let referencia = prompt("Desea A.automovil o B.camioneta")

function VenXtucarro(){
    if(marca == "a" && referencia == "a"){
        alert("Chevrolet Joy: Este modelo de vehículo es un sedan que cuenta con un motor de 1,4 litros y frenos ABS y cuenta con una caja manual de cinco velocidades. Además, en cuanto a electrónica, tiene conectividad Bluetooth y vidrios electrónicos en la parte delantera. Este modelo se encuentra en los concesionarios de manera inmediata, en su versión básica.")
    }else if(marca == "a" && referencia == "b"){
        alert("la camioneta es mejor")
    }else if(marca == "b" && referencia == "a"){
        alert("MAZDA 6: TECNOLOGÍA SKYACTIV Completa reingeniería con desarrollos innovadores en motor, sistema de escape, transmisión, carrocería, frenos, dirección y suspensión, que generan un vehículo ágil con muy altos niveles de seguridad y reducción en el consumo de combustible y emisiones CO2. MOTOR SKYACTIV-G 2,5L Entrega 228 caballos de potencia a 5.000 r.p.m.; un torque máximo de 42,8 Kg-m a 2.000 r.p.m.; una relación de compresión de 10,5 a 1, y el escape con su sistema 4-3-1, que brindan un extraordinario desempeño con eficiente consumo de combustible.")
    }
}
VenXtucarro()