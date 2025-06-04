let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let suma = numero1 + numero2;
var diferencia = numero1 - numero2;
let sonIguales = numero1 === numero2;
const resultadoLogico = sonIguales || false;

console.log("Suma:", suma);
console.log("Diferencia:", diferencia);
console.log("¿Son iguales?", sonIguales);
console.log("Resultado lógico:", resultadoLogico);