/* Determinar la cantidad de dinero recibida por un trabajador 
por concepto de las horas semanales trabajadas en una 
empresa, sabiendo que cuando las horas de trabajo exceden de 
40, el resto se considera horas extras y se pagan al doble de 
una hora normal, cuando no exceden de 8; si las horas extras 
exceden de 8, se pagan las primeras 8 al doble de lo que se 
paga una hora normal y el resto al triple. Del trabajador se 
conocen los siguientes datos: nombres, número de horas 
trabajadas en la semana y valor recibido por una hora normal 
de trabajo */

let salario;

let nombres = prompt("Por favor, ingrese el nombre del trabajador");

let horasTrabajadas = Number(prompt("Por favor, ingrese la cantidad de horas trabajadas en la semana"));

let valorHoraNormal = Number(prompt("Por favor, ingrese el valor de una hora normal"));

if (horasTrabajadas <= 40) {
    salario = horasTrabajadas * valorHoraNormal
    
}

else if (horasTrabajadas>40 && horasTrabajadas <= 48) {
    salario = (valorHoraNormal*40) + ((horasTrabajadas-40)*(valorHoraNormal*2));
  
} else {
    salario = (valorHoraNormal*40)+ ((valorHoraNormal*2)*8)+ ((horasTrabajadas-48)*(valorHoraNormal*3));

}

console.log(`El salario de ${nombres} es de ${salario}`);
