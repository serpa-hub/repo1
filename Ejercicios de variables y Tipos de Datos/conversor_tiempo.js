const minutosPorHora = 60; // constante para minutos por hora
const segundosPorMinuto = 60; // constante para segundos por minuto
let horas = parseFloat(prompt("¿Cuántas horas quieres convertir?"));
let minutos = horas * minutosPorHora;
var segundos = minutos * segundosPorMinuto;
let esMayorAHora = horas > 1;

console.log("Minutos:", minutos);
console.log("Segundos:", segundos);
console.log("¿Es mayor a 1 hora?", esMayorAHora);