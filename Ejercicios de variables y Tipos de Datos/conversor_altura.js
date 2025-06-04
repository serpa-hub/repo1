const alturaDeReferencia = 1.5; // constante para altura de referencia
let altura = parseFloat(prompt("¿Cuál es tu altura en metros?"));
let alturaEnCentimetros = altura * 100;
var alturaEnMilimetros = alturaEnCentimetros * 10;
let esAlta = altura > alturaDeReferencia;
let indefinida;

console.log("Altura en centímetros:", alturaEnCentimetros);
console.log("Altura en milímetros:", alturaEnMilimetros);
console.log("¿Es alta?", esAlta);
console.log("Valor indefinido:", indefinida);