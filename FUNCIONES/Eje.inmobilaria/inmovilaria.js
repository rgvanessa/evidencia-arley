function calcularComision(costo, tipo) {
    let comision;
    if (tipo === 1) {
      comision = costo * 0.10;
    } else if (tipo === 2) {
      comision = costo * 0.12;
    }
    return comision;
}

function calcularVenta() {
    let costo = 4000000
    let tipo = 2

    let comision = calcularComision(costo, tipo);
    let valorPropietario = costo - comision;

    console.log(`El valor que recibe el propietario es: ${valorPropietario} y el valor recibido por la inmobiliaria es: ${comision}`);
}

calcularVenta();
calcularComision();