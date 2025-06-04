const referenciaArea = 50; // constante para área de referencia
let ancho = parseFloat(prompt("¿Cuál es el ancho del rectángulo?"));
let alto = parseFloat(prompt("¿Cuál es el alto del rectángulo?"));
let area = ancho * alto;
var areaMayor50 = area > referenciaArea;
let indefinida;

console.log("Área del rectángulo:", area);
console.log("¿Es mayor a 50?", areaMayor50);
console.log("Valor indefinido:", indefinida);