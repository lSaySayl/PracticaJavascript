/* Cierta universidad para liquidar el pago de matrícula de un 
estudiante le exige los siguientes datos: 
a. • Número de inscripción 
b. • Nombres 
c. • Patrimonio. 
d. • Estrato social. 
e. La universidad cobra un valor constante para cada 
estudiante de $50.000. 
i. Si el patrimonio es mayor que $2´000.000 y el 
estrato superior a 3, se le incrementa un 
porcentaje del 3% sobre el patrimonio. 
Hacer un algoritmo que muestre: 
• Número de inscripción.
• Nombres. 
• Pago de matrícula. */


let valorEstudiante = 50000
let porcentaje = 0.03


let numeroInscripcion = Number(prompt("Por favor, ingrese el número de inscripción"));

let nombreEstudiante = prompt("Por favor ingrese el nombre del estudiante");

let patrimonio = Number(prompt("Por favor, ingrese el valor de su patrimonio"));

let estratoSocial = Number(prompt("Por favor, ingrese el estrato social"));

if (patrimonio>2000000 && estratoSocial > 3) {

    valorEstudiante += (patrimonio*porcentaje);

} 

console.log(` El numero de inscripción es ${numeroInscripcion}\n El nombre es ${nombreEstudiante} \n El pago de la matricula es ${valorEstudiante}`);
