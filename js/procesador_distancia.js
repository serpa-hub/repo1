const kilometrosPorMetro = 1000; // constante para la conversión
let distancia = parseFloat(prompt("¿Cuántos kilómetros recorres?"));
let metros = distancia * kilometrosPorMetro;
var centimetros = metros * 100;
let esMenorA1km = distancia < 1;
const nulo = null;

console.log("Distancia en metros:", metros);
console.log("Distancia en centímetros:", centimetros);
console.log("¿Es menor a 1 km?", esMenorA1km);
console.log("Valor nulo:", nulo);