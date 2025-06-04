const mesesPorAno = 12; // constante para los meses de un año
let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));
let peso = parseFloat(prompt("¿Cuánto pesas en kilogramos?"));
let edadEnMeses = edad * mesesPorAno;
let pesoEnGramos = peso * 1000;
let nombreVacio = nombre === "";
let edadEsPar = edad % 2 === 0;
let combinacionLogica = nombreVacio || edadEsPar;

console.log("Nombre:", nombre);
console.log("Edad en meses:", edadEnMeses);
console.log("Peso en gramos:", pesoEnGramos);
console.log("¿El nombre está vacío?", nombreVacio);
console.log("¿La edad es par?", edadEsPar);
console.log("Combinación lógica:", combinacionLogica);