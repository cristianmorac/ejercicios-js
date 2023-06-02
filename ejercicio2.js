
let edad = parseInt(prompt("Ingrese su edad"));

/* Respuesta 1 */
const opcion1 = function (edad) {

    let municipio = prompt("Su municipio es fronterizo del País? 1/Si - 2/No");
    /* Validar si solo ingresaron texto */
    if (isNaN(edad) && isNaN(municipio)) {
        console.log("Algún valor es incorrecto");
        edad = prompt("Ingrese su edad");
        municipio = prompt("Su municipio es fronterizo del País? 1/Si - 2/No");
    }
    else {
        municipio = parseInt(municipio)
        /* Validar si es mayor de edad y es fronterizo al País */
        if (edad >= 18 && municipio == 1) {
            return "Se puede vacunar";
        }
        else {
            return "No se puede vacunar"
        }
    }
}
/* Respuesta 2 */
const opcion2 = function (edad) {

    let embarazada = prompt("Esta embarazada? 1=No / 2=Si");
    let gestacion = prompt("Cuantos meses de gestación tiene?");

    if (isNaN(edad) && isNaN(embarazada) && isNaN(gestacion)) {
        console.log("Algún valor es incorrecto");
        edad = prompt("Ingrese su edad");
        embarazada = parseInt(prompt("Esta embarazada? 1=No / 2=Si"));
        gestacion = parseInt(prompt("Cuantos meses de gestación tiene?"));
        return "valor incorrecto"
    }
    else {
        if (edad >= 18 && embarazada == 2 && gestacion >= 9) return 'puede vacunarse'
        else { return 'No puede vacunarse' }
    }
}
/* Respuesta 3 */
const opcion3 = function () {

    let fecha1 = prompt('Cual es su año de nacimiento');
    let fecha2 = prompt('Cual es su mes de nacimiento 1=ENERO, 2=FEBRERO, 3=MARZO, 4=ABRIL, 5=MAYO, 6=JUNIO, 7=JULIO, 8=AGOSTO, 9=SEPTIEMBRE, 12=OCTUBRE, 11=NOVIEMBRE, 12=DICIEMBRE');
    if (isNaN(fecha1) && isNaN(fecha2)) {
        alert("Valores incorrectos")
        fecha1 = prompt('Cual es su año de nacimiento');
        fecha2 = prompt('Cual es su mes de nacimiento 1=ENERO, 2=FEBRERO, 3=MARZO, 4=ABRIL, 5=MAYO, 6=JUNIO, 7=JULIO, 8=AGOSTO, 9=SEPTIEMBRE, 12=OCTUBRE, 11=NOVIEMBRE, 12=DICIEMBRE');
        return "valor incorrecto"
    }
    else {
        fecha1 = parseInt(fecha1);
        fecha2 = parseInt(fecha2);

        const today = new Date();
        let year = today.getFullYear();
        edadActual = year - fecha1

        if (fecha1 == 1993 && fecha2 <6) {
            return 'Se puede vacunar';
        }

        else if (edadActual>=31){
            return 'Se puede vacunar';
        }
        else {
            return 'No Se puede vacunar';
        }
    }
    
}

/* Ejecutar las funciones */
document.write(`<h2>Respuesta uno</h2><p>${opcion1(edad)}</p>`)
document.write(`<h2>Respuesta dos</h2><p>${opcion2(edad)}</p>`)
document.write(`<h2>Respuesta tres</h2><p>${opcion3()}</p>`)







