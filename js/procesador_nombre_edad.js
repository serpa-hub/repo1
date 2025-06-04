const diasPorAno = 365; // constante para los días de un año
var nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));
let edadEnDias = edad * diasPorAno;
let nombreEsCorto = nombre.length < 5;
const nulo = null;

console.log("Nombre:", nombre);
console.log("Edad en días:", edadEnDias);
console.log("¿El nombre es corto?", nombreEsCorto);
console.log("Valor nulo:", nulo);