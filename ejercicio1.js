const peso = parseInt(prompt("Ingrese su peso: "));
const altura = parseFloat(prompt("Ingrese su altura: "));

/* Calculo IMC */
const IMC = peso / (altura**2)


const Persona = {
    peso: peso,
    altura: altura,
    IMC: IMC
}

document.write(`Peso: ${Persona.peso} \n Altura: ${Persona.altura} \n IMC: ${Persona.IMC}`);
console.log(Persona)