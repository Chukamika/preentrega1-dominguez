// Objeto con las tasas de cambio para las monedas
const tiposDeCambio = {
    UYU: 38.0,  // Peso Uruguayo
    ARG: 550.0, // Peso Argentino
    CLP: 815.0, // Peso Chileno
    BRL: 4.85,  // Real Brasileño
    USD: 1.0,   // Dólar Americano
    EUR: 0.90   // Euro
};

// Función para realizar la conversión de monedas
function convertirMoneda() {
    let continuar = true;

    while (continuar) {
        const deMoneda = prompt("Ingrese la moneda de origen (ej. USD, EUR, UYU, ARG, CLP, BRL.):").toUpperCase();
        const aMoneda = prompt("Ingrese la moneda de destino (ej. USD, EUR, UYU, ARG, CLP, BRL.):").toUpperCase();

        if (deMoneda in tiposDeCambio && aMoneda in tiposDeCambio) {
            const cantidadAConvertir = parseInt(prompt("Ingrese la cantidad a convertir:"));
            const cantidadConvertida = cantidadAConvertir * tiposDeCambio[aMoneda] / tiposDeCambio[deMoneda];

            // Mostrar el resultado en un mensaje de alerta
            alert(`${cantidadAConvertir} ${deMoneda} son equivalentes a ${cantidadConvertida.toFixed(2)} ${aMoneda}`);

            // Preguntar al usuario si desea realizar otra conversión
            const respuesta = prompt("¿Desea realizar otra conversión? (Sí / No)").toUpperCase();
            continuar = respuesta === "SI" || respuesta === "S";
        } else {
            alert("Las monedas ingresadas no son válidas. Intente nuevamente.");
        }
    }
}

// Llamar a la función para realizar la conversión al cargar la página
convertirMoneda();