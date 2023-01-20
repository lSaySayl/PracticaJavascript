/* Una empresa con tres departamentos tiene establecido un plan 
de incentivos para sus vendedores. Al final del período, a 
cada departamento se le pide el importe global de las ventas. 
A los departamentos que excedan el 33% de las ventas totales 
se les adiciona al salario de los vendedores un porcentaje 
equivalente al 20% del salario mensual. Las nóminas de los 
tres departamentos son iguales. Si se tienen los siguientes 
datos: 
a. • Ventas del departamento 1 
b. • Ventas del departamento 2 
c. • Ventas del departamento 3 
d. • Salario de los vendedores de cada departamento 
Hacer un algoritmo que determine cuánto recibirán los 
vendedores de cada departamento al finalizar el período */


let ventasDepartamentoUno = Number(prompt("Por favor, ingrese las ventas del departamento #1"));
let ventasDepartamentoDos = Number(prompt("Por favor, ingrese las ventas del departamento #2"));
let ventasDepartamentoTres = Number(prompt("Por favor, ingrese las ventas del departamento #3"));

let salarioVendedores = Number(prompt("Por favor, ingrese el salario base de los vendedores"));

const ventasTotales = ventasDepartamentoUno + ventasDepartamentoDos + ventasDepartamentoTres;

const PorcentajeIn = 0.33;
const porcentajeAdicional = 0.2;

let salarioDep1 = salarioVendedores;
let salarioDep2 = salarioVendedores;
let salarioDep3 = salarioVendedores;

if (ventasDepartamentoUno > ventasTotales * PorcentajeIn) {
    salarioDep1 += salarioVendedores * porcentajeAdicional;
}
if (ventasDepartamentoDos > ventasTotales * PorcentajeIn) {
    salarioDep2 += salarioVendedores * porcentajeAdicional;
}
if (ventasDepartamentoTres > ventasTotales * PorcentajeIn) {
    salarioDep3 += salarioVendedores * porcentajeAdicional;
}

console.log(`El salario del departamento 1 es: ${salarioDep1}`);
console.log(`El salario del departamento 2 es: ${salarioDep2}`);
console.log(`El salario del departamento 3 es: ${salarioDep3}`);