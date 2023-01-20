/*  Un almacén efectúa una promoción en la cual se hace un 
descuento sobre el valor de la compra total, según el color 
de la bolita que el cliente saque al pagar en caja. Si la 
bolita es blanca no se le hará descuento alguno, si es verde 
se le hará un 10% de descuento, si es amarilla un 25%, si es 
azul un 50% y si es roja un 100%. Hacer un algoritmo para 
determinar la cantidad final que un cliente deberá pagar por 
su compra. Se sabe que sólo hay bolitas de los colores 
mencionados */


let balota = prompt("Por favor, ingrese el color de la balota \n 1. Blanca \n 2. Verde \n 3. Amarilla \n 4. Azul \n 5. Roja");
let valorTotal = Number(prompt("Por favor, ingrese el valor total de la compra"));
let descuento = 0;


switch (balota) {
    case "Blanca":
        console.log(`Lo sentimos, la balota blanca no tiene ningún tipo de descuento. Por tanto, el valor a pagar es de ${valorTotal}`);

        break;

    case "Verde":
        descuento = valorTotal - (valorTotal*0.1);
        console.log(`En este caso, la balota verde tiene un descuento del 10%. Por tanto, el valor a pagar es de ${descuento}`);

        break;
    
    case "Amarilla":
        descuento = valorTotal - (valorTotal*0.25);

        console.log(`En este caso, la balota amarilla tiene un descuento del 25%. Por tanto, el valor a pagar es de ${descuento}`);

    break;

    case "Azul":
        descuento = valorTotal - (valorTotal*0.5);
        console.log(`En este caso, la balota azul tiene un descuento del 50%. Por tanto, el valor a pagar es de ${descuento}`);

    break;

    case "Roja":
        descuento = valorTotal - (valorTotal*1);
        console.log(`🎉¡Felicitaciones!🎉 La balota roja tiene un descuento del 100%. Por tanto, el valor a pagar es de ${descuento}`);

    break;


    default:
        console.log("El valor ingresado fue incorrecto, recuerde que los colores de la balota son: Blanca, verde, amarilla, azul y rojo. ");
        break;
}