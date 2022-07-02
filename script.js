// Inicializo las variables
let titulo = "PRODUCTOS PARA TU TIENDA ON LINE\r\n____";
let totalProductos     = 5;
let totalCompra        = 0;
const arrayProducto    = [];       // -> Array que contiene la lista de productos
const arrayNombre      = [];
const arrayCarrito     = [];
let respuesta          = "SI";
let respuesta1         = "SI";
let respuesta2         = "SI";
let respuesta3         = "SI";
let respuesta4         = "SI";

let contadorID         = 0;
let contadorIDCarrito  = 0;
let opcion             = 1;
let totalCarrito       = 0;

// Definición del objeto producto y su clase con constructor
class Producto { 
    constructor (id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
        return this;
    }
    
}

// Definición del objeto carrito y su clase con constructor
class Carrito { 
    constructor (idCarrito, idProducto, nombre, precio, cantidad) {
        this.idCarrito = idCarrito,
        this.idProducto = idProducto,
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
        return this;
    }
}

// recorro el array que contiene el contenido de los productos
const mostrarCatalogo = (array) => {
    let mensaje = titulo;
    console.log (array.length);

    for (let index = 0; index < array.length; index++) {
        mensaje = mensaje + "\r\n";
        mensaje = mensaje + parseInt(array[index].id)+". "+array[index].nombre+" $"+parseFloat(array[index].precio);       
    }return (mensaje);
}

// recorro el array que contiene el contenido del carrito
const mostrarCatalogoCarrito = (array) => {
    let mensaje = titulo;
    
    for (let index = 0; index < array.length; index++) {
        mensaje = mensaje + "\r\n";
        mensaje = mensaje + "Producto "+parseInt(array[index].idProducto)+". "+array[index].nombre+" Cantidad $"+parseFloat(array[index].cantidad)+" Precio $"+parseFloat(array[index].precio);       
    } return (mensaje);
}

// Devuelvo los valores correspondientes dependiendo del filtro
const filtrarDesc = query => {
        return arrayNombre.filter((param) =>
          param.toUpperCase().indexOf(query.toUpperCase()) > -1
    );
  }


// Añado producto al Objeto y lo añado al Array
// Adicionalmente lleno los nombres en un array auxiliar
const addProducto = (producto, precio) => {
    const productoAdd = new Producto(parseInt (++contadorID),producto,precio)
    arrayProducto.push (productoAdd);
    arrayNombre.push (producto);
}

// Añado producto al Objeto y lo añado al Array del carrito
// Adicionalmente totalizo la compra
const addCarrito = (contadorProducto, producto, precio, cantidad) => {
    const productoAdd = new Carrito(parseInt (++contadorIDCarrito), contadorProducto,producto,precio,cantidad)
    arrayCarrito.push (productoAdd);
    totalCarrito+=precio*cantidad;
}

nombre = prompt (`Ingresa tu nombre por favor`);

do {
    // Este es el Menú del programa,  y de aquí paso a cada una de las opciones
    opcion = prompt (`Hola ${nombre} Utiliza una de nuestras funciones \r\n1. Grabar productos\r\n2. Buscar producto por Nombre\r\n3. Filtrar producto por Nombre\r\n4. Comprar productos\r\n5. Salir`).toUpperCase();

    //[Opción 1 del Menú] En este bucle grabo productos usando las funciones para mostrar y grabar.
    while ( (opcion == "1") && (respuesta1 == "SI") ) {

        let producto = prompt ("Descripción del producto");
        let precio   = prompt ("Precio del producto");

        addProducto(producto, precio);

        do {
            respuesta1 = prompt (mostrarCatalogo(arrayProducto)+"\r\n____\r\n¿Desea seguir grabando productos?\r\nSI\r\nNO").toUpperCase();

        } while ( (respuesta1 != "SI") && (respuesta1 != "NO") )

    }

    //[Opción 2 del Menú] En este bucle busco productos usando forEach que está dentro de este mismo bucle.
    while ( (opcion == "2") && (respuesta2 == "SI") ) {
        let busqueda = prompt ("Introduzca la descripción de la búsqueda");
        
        do {
            arrayProducto.forEach(object => {
                if (object.nombre === busqueda){
                    alert (`El producto ${object.nombre} existe`);
                }
            });
            respuesta2 = prompt ("\r\n____\r\n¿Desea seguir buscando productos?\r\nSI\r\nNO").toUpperCase();
        } while ( (respuesta2 != "SI") && (respuesta2 != "NO") )

    }

    //[Opción 3 del Menú] En este bucle busco filtro usando la función FiltrarDesc.
    while ( (opcion == "3") && (respuesta3 == "SI") ) {
        let busqueda = prompt ("Introduzca la descripción del filtro");

        do {
            alert ("El resultado del filtro es "+filtrarDesc(busqueda));
            respuesta3 = prompt ("\r\n____\r\n¿Desea seguir filtrando productos?\r\nSI\r\nNO").toUpperCase();
        } while ( (respuesta3 != "SI") && (respuesta3 != "NO") )
    }

    //[Opción 4 del Menú] En este bucle el usuario compra productos y se va mostrando el total
    while ( (opcion == "4") && (respuesta4 == "SI") ) {
        busqueda = prompt (mostrarCatalogo(arrayProducto)+"\r\n____\r\nSeleccione el producto");
        let cantidad = prompt ("Introduzca cantidad");
        addCarrito (arrayProducto[parseInt (busqueda)-1].id, arrayProducto[parseInt (busqueda)-1].nombre, arrayProducto[parseInt (busqueda)-1].precio, cantidad);
        alert (mostrarCatalogoCarrito(arrayCarrito)+"\r\n____\r\nTotal:"+totalCarrito+" Seleccione el producto");

        do {
            respuesta4 = prompt ("\r\n____\r\n¿Desea seguir comprando productos?\r\nSI\r\nNO").toUpperCase();
        } while ( (respuesta4 != "SI") && (respuesta4 != "NO") )
    }

} while ( opcion != "5" )