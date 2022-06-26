// Inicializo las variables
let titulo = "PRODUCTOS PARA TU TIENDA ON LINE\r\n____";
let totalProductos  = 5;
let totalCompra     = 0;
const arrayProducto = [];       // -> Array que contiene la lista de productos
let respuesta       = "SI";
let contadorID      = 0;
let opcion          = 1;

// Definición del objeto y su clase con constructor
class Producto { 
    constructor (id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
}

// recorro el array que contiene el contenido de los productos
const mostrarCatalogo = () => {
    let mensaje = titulo;
    
    for (let index = 0; index < arrayProducto.length; index++) {
        mensaje = mensaje + "\r\n";
        mensaje = mensaje + parseInt(arrayProducto[index].id)+". "+arrayProducto[index].nombre+" $"+parseFloat(arrayProducto[index].precio);       
    }
    return (mensaje);
}

// Añado producto al Objeto y lo añado al Array
const addProducto = (producto, precio) => {
    const productoAdd = new Producto(parseInt (++contadorID),producto,precio)
    arrayProducto.push (productoAdd)
}

nombre = prompt (`Ingresa tu nombre por favor`);

do {
  opcion = prompt (`Hola ${nombre} ¿Quieres grabar productos?\r\nSI\r\nNO`).toUpperCase();
} while ( (opcion != "SI") && (opcion != "NO") );

    //En este bucle grabo productos usando las funciones para mostrar y grabar
    while (opcion == "SI") {

        let producto = prompt ("Descripción del producto");
        let precio   = prompt ("Precio del producto");
                        
            addProducto(producto, precio);


        do {
            opcion = prompt (mostrarCatalogo()+"\r\n____\r\n¿Desea seguir grabando productos?\r\nSI\r\nNO").toUpperCase();
        } while ( (opcion != "SI") && (opcion != "NO") )

    }


