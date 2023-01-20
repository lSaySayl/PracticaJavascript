/* Realizar un algoritmo que permita ingresar los tres lados de 
un triángulo, y decir si es equilátero, escaleno o isosceles */

let ladoUno = prompt("Por favor, ingrese el primer lado del triangulo");

let ladoDos = prompt("Por favor, ingrese el segundo lado del triangulo");

let ladoTres = prompt("Por favor, ingrese el tercer lado del triangulo");

if(ladoUno === ladoDos && ladoDos === ladoTres) {
    console.log("Este es un triangulo equilátero");

} else if (ladoUno === ladoDos || ladoUno === ladoTres) {
    console.log("Este es un triangulo isosceles");


} else {
    console.log("Este es un triangulo escaleno");
} 