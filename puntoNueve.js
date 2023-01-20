/* Un almacén de escritorios hace los siguientes descuentos: si 
el cliente compra menos de 5 unidades se le da un descuento 
del 10% sobre la compra; si el número de unidades es mayor o 
igual a cinco, pero menos de 10 se le otorga un 20% y, si son 
10 o más se le da un 40%. Hacer un algoritmo que determine 
cuánto debe pagar un cliente si el valor de cada escritorio 
es de $800.000 */

const escritorio = 800000;
let cantidadComprada = Number(prompt("Por favor, ingrese la cantidad"));
let total = 0;
let totalConDescuento = 0;


switch (true) {

    case (cantidadComprada <5):

        total = cantidadComprada * escritorio;

        totalConDescuento = total - (total*0.1);

        console.log(`Por comprar ${cantidadComprada} tu descuento es del 10%. Por lo tanto, el total a pagar es de $${totalConDescuento}`);

    break;

    case (cantidadComprada >=5 && cantidadComprada <10 ):

        total = cantidadComprada * escritorio;

        totalConDescuento = total - (total*0.2);

        console.log(`Por comprar ${cantidadComprada} unidades tu descuento es del 20%. Por lo tanto, el total a pagar es de $${totalConDescuento}`);

        break;

    case (cantidadComprada >=10):

        total = cantidadComprada * escritorio;

        totalConDescuento = total - (total*0.4);

        console.log(`Por comprar ${cantidadComprada} unidades tu descuento es del 40%. Por lo tanto, el total a pagar es de $${totalConDescuento}`);

    break;
} 