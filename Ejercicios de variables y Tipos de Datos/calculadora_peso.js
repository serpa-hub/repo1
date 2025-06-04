const pesoDeReferencia = 70; // constante para peso de referencia
let peso = parseFloat(prompt("¿Cuánto pesas en kilogramos?"));
let pesoEnGramos = peso * 1000;
var esMayor70 = peso > pesoDeReferencia;
let combinacionLogica = esMayor70 && true;

console.log("Peso en gramos:", pesoEnGramos);
console.log("¿Es mayor a 70 kg?", esMayor70);
console.log("Combinación lógica:", combinacionLogica);