const saludo = "¡Tu texto es: "; // constante para el saludo
let texto = prompt("Escribe un texto:");
var textoCompleto = saludo + texto;
let esLargo = texto.length > 10;
let valorNegado = !(esLargo);
const nulo = null;

console.log("Texto completo:", textoCompleto);
console.log("¿Es largo?", esLargo);
console.log("Negación de largo:", valorNegado);
console.log("Valor nulo:", nulo);