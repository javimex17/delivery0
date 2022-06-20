

let titulo = "CATÁLOGO DE PRODUCTOS \r\nElige una opción"
let totalProductos = 5;
let totalCompra    = 0;

let codProduct1 = 1;
let codProduct2 = 2;
let codProduct3 = 3;
let codProduct4 = 4;
let codProduct5 = 5;

let descProduct1 = "HAMBURGUESA";
let descProduct2 = "PIZZA";
let descProduct3 = "SUSHI";
let descProduct4 = "TACOS";
let descProduct5 = "POSTRE";

let precioProduct1 = 120;
let precioProduct2 = 200;
let precioProduct3 = 150;
let precioProduct4 = 80;
let precioProduct5 = 90;

let nombre = "";

const catalogo = () => {

    let mensaje = titulo;
    mensaje = mensaje + "\r\n";
    mensaje = mensaje + "\r\n";   
    mensaje = mensaje + parseInt(codProduct1)+". "+descProduct1+" $"+parseInt(precioProduct1);
    mensaje = mensaje + "\r\n";
    mensaje = mensaje + parseInt(codProduct2)+". "+descProduct2+" $"+parseInt(precioProduct2);
    mensaje = mensaje + "\r\n";
    mensaje = mensaje + parseInt(codProduct3)+". "+descProduct3+" $"+parseInt(precioProduct3);
    mensaje = mensaje + "\r\n";
    mensaje = mensaje + parseInt(codProduct4)+". "+descProduct4+" $"+parseInt(precioProduct4);
    mensaje = mensaje + "\r\n";
    mensaje = mensaje + parseInt(codProduct5)+". "+descProduct5+" $"+parseInt(precioProduct5);
    mensaje = mensaje + "\r\n";

    return (mensaje);
}

const addCarrito = (producto, cantidad) => { 
    let mensaje = "";

    switch (producto) {
        case "1": mensaje = parseInt(codProduct1)+" "+descProduct1+" $"+parseInt(precioProduct1);
                totalCompra = totalCompra + parseInt (precioProduct1 * cantidad);
                break;
        case "2": mensaje = parseInt(codProduct2)+" "+descProduct1+" $"+parseInt(precioProduct2);
                totalCompra = totalCompra + parseInt (precioProduct2 * cantidad);
                break;
        case "3": mensaje = parseInt(codProduct3)+" "+descProduct1+" $"+parseInt(precioProduct3);
                totalCompra = totalCompra + parseInt (precioProduct3 * cantidad);
                break;
        case "4": mensaje = parseInt(codProduct4)+" "+descProduct1+" $"+parseInt(precioProduct4);
                totalCompra = totalCompra + parseInt (precioProduct4 * cantidad);
                break;
        case "5": mensaje = parseInt(codProduct5)+" "+descProduct1+" $"+parseInt(precioProduct5);
                totalCompra = totalCompra + parseInt (precioProduct5 * cantidad);
                break;

    }

}

nombre = prompt ("Ingresa tu nombre por favor");
let respuesta = "SI";

respuesta = prompt ("Hola "+nombre+", quieres comprar en nuestra tienda ? \r\nSI\r\nNO\r\nFIN ");


while (respuesta == "SI") {

        let producto = prompt (catalogo());
        let cantidad = prompt ("Qué cantidad deseas "+nombre);
        addCarrito(producto, cantidad);
        alert ("Total de tu compra "+parseInt(totalCompra));
    
    respuesta = prompt ("Hola "+nombre+", quieres seguir comprando en nuestra tienda ? \r\nSI\r\nNO\r\nFIN ");
  //  if ((respuesta == "NO") && (totalCompra = 0)) { alert("Necesitamos comprar al menos una vez")}

} 

alert ("Gracias "+nombre+" \r\nEl total de tu compra es $"+parseInt (totalCompra));




