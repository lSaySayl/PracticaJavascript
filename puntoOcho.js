/* Cierta universidad tiene un programa para estimular a los 
estudiantes con buen rendimiento académico. Si el promedio es 
de 4,5 o más y el alumno es de pregrado entonces cursará 28 
créditos y se le hará un 25% de descuento. Si el promedio es 
mayor o igual a 4,0 pero menor que 4,5 y el alumno es de 
pregrado, entonces cursará 25 créditos y se le hará un 10% de 
descuento. Si el promedio es mayor que 3,5 y menor que 4,0 y 
es de pregrado, cursará 20 créditos y no tendrá ningún 
descuento. Si el promedio es mayor o igual a 2,5 y menor que 
3,5 y es de pregrado, cursará 15 créditos y no tendrá 
descuento. Si el promedio es menor de 2,5 y es de pregrado, 
no podrá matricularse. Si el promedio es mayor o igual a 4,5 
y es de posgrado, cursará 20 créditos y se le hará un 20% de 
descuento. Si el promedio es menor de 4,5 y es de posgrado 
cursará 10 créditos y no tendrá descuento */


let promedio = parseFloat(prompt("Por favor, ingrese el promedio del estudiante."))
let tipoGrado = prompt("Por favor, ingrese el tipo de grado que está cursando el alumno. Es decir \n 1. Pregrado \n 2. Posgrado")
let valorMatricula = Number(prompt("Por favor, ingrese el valor de la matricula"));
let ValorMatriculaDescuento = 0;

switch (true) {

    case (promedio >= 4.5 && tipoGrado == "Pregrado"): 

        ValorMatriculaDescuento = valorMatricula - (valorMatricula*0.25);

        console.log(`Para este semestre vas a cursar 28 créditos y tendrás un descuento del 25% por tu promedio de ${promedio}, el valor de tu matricula será de $${ValorMatriculaDescuento}`);

        break;

    case (promedio>=4.0 && tipoGrado == "Pregrado"):
        ValorMatriculaDescuento = valorMatricula - (valorMatricula*0.1);

        console.log(`Para este semestre vas a cursar 25 créditos y tendrás un descuento del 10% por tu promedio de ${promedio}, el valor de tu matricula será de $${ValorMatriculaDescuento}`);
        break;

    case (promedio > 3.5 && tipoGrado == "Pregrado"):
        console.log(`Para este semestre vas a cursar 20 créditos y no tendrás ningún descuento. Por lo tanto, el valor de tu matricula será de $${valorMatricula}`);     
        break;

    case (promedio >= 2.5 && tipoGrado == "Pregrado"):
        console.log (`Para este semestre vas a cursar 15 créditos y no tendrás ningún descuento. Por lo tanto, el valor de tu matricula será de $${valorMatricula}`);
        break;

    case (promedio < 2.5 && tipoGrado == "Pregrado"):
        console.log("Lo sentimos, no podrás matricularte este semestre")
        break;

    case (promedio >=4.5 && tipoGrado == "Posgrado"):
        ValorMatriculaDescuento = valorMatricula - (valorMatricula*0.2);

        console.log(`Para este semestre vas a cursar 20 créditos y tendrás un descuento del 20% por tu promedio de ${promedio} en tu posgrado, el valor de tu matricula será de $${ValorMatriculaDescuento}`)
        
        break;

    case (promedio < 4.5 && tipoGrado == "Posgrado"):
        console.log(`Para este semestre de posgrado vas a cursar 10 créditos y no tendrás ningún descuento. Por lo tanto, el valor de tu matricula es de $${valorMatricula}`)

    break;

    default:
        console.log("El valor ingresado fue incorrecto.")


} 