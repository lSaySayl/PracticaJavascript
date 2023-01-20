/*  Dados los valores A, B y C que son los parámetros de una 
ecuación de segundo grado, elaborar un algoritmo para hallar 
las posibles soluciones de dicha ecuación */


let valorA = Number(prompt("Por favor, ingrese el valor de A"));
let valorB = Number(prompt("Por favor, ingrese el valor de B"));
let valorC = Number(prompt("Por favor, ingrese el valor de C"));


let valorDiscriminante = (Math.pow(valorB,2)) - (4 * valorA * valorC);

switch (true) {
    case valorDiscriminante > 0:

        let x1 = (-valorB + Math.sqrt(valorDiscriminante)) / (2 * valorA);

        let x2 = (-valorB - Math.sqrt(valorDiscriminante)) / (2 * valorA);

        console.log(`La ecuación tiene dos soluciones en los números reales y son: ${x1} y ${x2}`);

        break;

    case valorDiscriminante === 0:

        let x = -valorB / (2 * valorA);
        console.log(`La ecuación tiene una solución en los números reales y es ${x}`);
        break;


    default:
        console.log(`La ecuación no tiene solución en los números reales. Esto, porque su discriminante es un numero negativo ${valorDiscriminante}`);
}