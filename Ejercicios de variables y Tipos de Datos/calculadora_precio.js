const descuento = 0.1; // constante para el descuento
let precio = parseFloat(prompt("¿Cuál es el precio del producto?"));
let precioConDescuento = precio - (precio * descuento);
var esMayor100 = precio > 100;
let negacion = !(esMayor100);
let indefinido;

console.log("Precio con descuento:", precioConDescuento);
console.log("¿Es mayor a 100?", esMayor100);
console.log("Negación de mayor a 100:", negacion);
console.log("Valor indefinido:", indefinido);