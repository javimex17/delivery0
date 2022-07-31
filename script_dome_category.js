
// Aquí capturo todos las constantes que necesito para hacer la "magia" con el DOM
const openModalRestaurant       = document.getElementsByClassName ('action_menuRestaurant');
const modalRestaurant           = document.querySelector  ('.modalRestaurant');
const closeModalRestaurant      = document.querySelector  ('.modal__closeRestaurant');
const closeCarritoPago          = document.getElementById ('closeCarritoPago');
const modalShopOpen             = document.getElementById ('action_menu_shop');
const modalShopClose            = document.getElementById ('modal_menu__close');
const modalShopRestaurantClose  = document.getElementById ('closeAddRestaurant');
const modalShop                 = document.querySelector  ('.modal_menu')
const closeModalGeneral         = document.querySelector  ('.modal__closeRestaurant');
const categoryTextBlack         = document.getElementById ('categoryTextBlack');
const categoryTextRed           = document.getElementById ('categoryTextRed');

const arrayRestaurant           = [];
const arrayRestaurant10         = [];
const arrayProductRestaurant    = [];
const arrayShopCategory         = [];
let   arrayRestaurantPrint      = [];
const arrayProductFilter        = [];
let   arrayCarrito              = [];

// Clase Restaurant con el constructor
class Restaurant {
    constructor (id, nombre, imagen, top, tiempo, category) {
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.top = top,
        this.tiempo = tiempo,
        this.category = category
        return this;
    }
}

class productRestaurant {
    constructor (idRestaurant, idProduct, restaurant, category, nombre, image, price){
    this.idRestaurant = idRestaurant;
    this.idProduct = idProduct,
    this.restaurant = restaurant,
    this.category = category,
    this.nombre = nombre,
    this.image = image,
    this.price = price
    return this;
    }
}

// Esta es la función para añadir al objeto Restaurant
const addRestaurant = (id, nombre, imagen, top, tiempo, category) => {
    const restaurantAdd = new Restaurant(id,nombre,imagen, top, tiempo, category)
    arrayRestaurant.push (restaurantAdd);
}

// Esta es la función para añadir al objeto productRestaurant
const addproductRestaurant = (idRestaurant, idProduct, restaurant, category, nombre, image, price) => {
    const productRestaurantAdd = new productRestaurant(idRestaurant, idProduct, restaurant, category, nombre, "./assets/restaurants/"+restaurant+"/"+nombre+".png", price)
    arrayProductRestaurant.push (productRestaurantAdd);
}



const reload = (section) => {
    location.href= section;
    location.reload();
}


const construirInicio = () => {

//Obtengo la página donde estoy  index o category
paginaActual = window.location.pathname;

//Si paso a category necesito obtener qué categoría quiero mostrar
//category es una variable que utilizo 
let category = "";
category = window.location.hash.replace ("#", "");


    if ( (paginaActual == "/index.html" ) || (paginaActual == "/" )  || (paginaActual == "/delivery0/index.html" )) {
        arrayRestaurantPrint = filtrarRestaurant10 (5);
    }
    else {
        arrayRestaurantPrint = filtrarCategory (category)
        categoryTextBlack.textContent = category+" cerca de mi";
        categoryTextRed.textContent = category+" a domicilio";
    }

        let banner_section_Cards = document.getElementById ("banner_section_Cards")

        
    for (let index = 0; index < arrayRestaurantPrint.length; index++) {

        let card_restaurant = document.createElement ("div");
        let boxImageCenter = document.createElement ("div");
        let boxImage = document.createElement ("div");
        let imgRestaurant = document.createElement ("img");
        let boxNomRestaurant_bnd_nom = document.createElement ("div");
        let font_whiteBlack16Lite_nom = document.createElement ("a");
        let boxNomRestaurant_bnd_tiempo = document.createElement ("div");
        let font_whiteBlack16Lite_tiempo = document.createElement ("a");

        card_restaurant.className = "card_restaurant action_menuRestaurant";
        boxImageCenter.className = "boxImageCenter";
        boxImage.className = "boxImage";
        imgRestaurant.className = "imgRestaurant";

    
        boxNomRestaurant_bnd_nom.className = "boxNomRestaurant_bnd";
        font_whiteBlack16Lite_nom.className = "font-whiteGray14Lite";
    // font_whiteBlack16Lite_nom.setAttribute ("id", "NomRestaurant");
        card_restaurant.setAttribute ("id", arrayRestaurantPrint[index].nombre);

        boxNomRestaurant_bnd_tiempo.className = "boxNomRestaurant_bnd";
        font_whiteBlack16Lite_tiempo.className = "font-whiteGray14Lite";

        imgRestaurant.src = arrayRestaurantPrint[index].imagen;
        font_whiteBlack16Lite_nom.textContent = arrayRestaurantPrint[index].nombre;
        font_whiteBlack16Lite_tiempo.textContent = arrayRestaurantPrint[index].tiempo+" min";

        banner_section_Cards.appendChild (card_restaurant);
            card_restaurant.appendChild (boxImageCenter);
                boxImageCenter.appendChild (boxImage);
                    boxImage.appendChild (imgRestaurant);
            card_restaurant.appendChild (boxNomRestaurant_bnd_nom);
                boxNomRestaurant_bnd_nom.appendChild (font_whiteBlack16Lite_nom);
            card_restaurant.appendChild (boxNomRestaurant_bnd_tiempo);
                boxNomRestaurant_bnd_nom.appendChild (font_whiteBlack16Lite_tiempo);

        const openModalRestaurant  = document.getElementsByClassName('action_menuRestaurant');

        // Creo este click para que al pulsar en una card de restaurante abra un modal y cargo los productos
        openModalRestaurant [index].addEventListener ('click',(e)=>{
            e.preventDefault();
            totalProducts = 0;
            modalRestaurant.classList.add ('modalRestaurant--show');
        construirPopProducts ( filtrarProduct (openModalRestaurant[index].id) );
        });

    }

}

// Me traigo los datos de store.json a un arreglo de objetos
const dataStore = async () => {
  try {
    const response  = await fetch ("./data/store.json");
    const dataStore = await response.json ();

    dataStore.forEach ( (post) => {
        addRestaurant (post.id, post.nombre, post.imagen, post.top, post.tiempo, post.category);
    });
  
  } catch (error) {
    console.log (error);

  }
};

// Me traigo los datos de products.json a un arreglo de objetos
const dataStoreProduct = async () => {
    try {
      const response  = await fetch ("./data/products.json");
      const dataStore = await response.json ();
  
      dataStore.forEach ( (post) => {

          addproductRestaurant  (post.idRestaurant, post.idProduct, post.restaurant, post.category, post.nombre, post.image, post.price);
      });
      construirInicio ();
    
    } catch (error) {
      console.log (error);
  
    }
  };
  
  
// Ejecuto el dataStore para usar los datos del store.json en el arrayRestaurant
dataStore ();
dataStoreProduct ();


// Función de notificación
const notifica = (mensaje) => {
    Toastify ({
        className: "infoToastify",
        text: mensaje,
        duration: 3000,
        gravity: 'bottom',
        position: 'center',
    }).showToast ();
}

// Si el carrito existe lo cargo en arrayCarrito para seguir usándolo --> Uso operador Lógico
(localStorage.getItem ("Carrito") != null ) &&  ( arrayCarrito = JSON.parse (localStorage.getItem ('Carrito')) );

// Con la función calcularTotalCarrito Recorro el Carrito y lo muestro en pantalla
const calcularTotalCarrito = (arrayCarrito) => {

    //totalCarrito
    let totalCarrito = document.getElementById ("totalCarrito");
    let captionModalTotal = document.getElementById ("captionModalTotal");
    let totalRest = 0;
  
    arrayCarrito.forEach(object => {    
        if (object.quantity != 0) {    
            totalRest += ( object.quantity * object.price );
        }
    });
    // Actualizo el carrito en la pantalla general y en el Modal del detalle del carrito
    totalCarrito.textContent      = "$ "+parseInt (totalRest);
    captionModalTotal.textContent = "$ "+parseInt (totalRest);

    if (totalRest > 0)
    notifica ("Tiene productos en el carrito $ "+parseInt (totalRest));

}

// Llamo a la función calcularTotalCarrito para mostrar el botón con el total
calcularTotalCarrito (arrayCarrito);

let totalProducts = 0;
let contadorID = 0;


const filtrarDesc = query => {
    return arrayNombre.filter((param) =>
      param.toUpperCase().indexOf(query.toUpperCase()) > -1
);
}

const arrayCategoryRestaurant = [
    "Hamburguesería",
    "Sushi",
    "Alta cocina",
    "Saludable",
    "Postres",
    "Café",
    "Asiática",
    "Pizza",
    "Tacos",
    "Italiana",
    "Mexicana",
    "Vegetariana",
    "Pescados y mariscos",
    "Desayunos",
    "Pastelería",
    "Sándwiches",
    "Pollo",
    "Internacional",
    "Helados",
    "Jugos y Bebidas",
    "Poke",
    "Wings"   
];

const ordenRestaurant = [
    "Calificación",
    "Tiempo de entrega"
];

const ordenPrecio = [
    ["Menos de 55", "$"],
    ["Entre 55 - 85", "$$"],
    ["Entre 85 - 125", "$$$"],
    ["Mas de 125", "$$$$"]
]





class carrito {
    constructor (idRestaurant, idProduct, restaurant, quantity, category, nombre, image, price ) {
        this.idRestaurant = idRestaurant;
        this.idProduct = idProduct,
        this.restaurant = restaurant,
        this.quantity = quantity,
        this.category = category,
        this.nombre = nombre,
        this.image = image,
        this.price = price
        return this; 
    }
}

modalShopRestaurantClose.addEventListener('click',(e)=>{
    // Cada vez que cierro el modal del carrito borro el carrito y lo guardo en el local Storage
    localStorage.removeItem ("Carrito");
    localStorage.setItem ("Carrito", JSON.stringify(arrayCarrito));
    e.preventDefault();
    modalRestaurant.classList.remove ('modalRestaurant--show');
});

closeModalRestaurant.addEventListener('click',(e)=>{
    // Cada vez que cierro el modal del carrito borro el carrito y lo guardo en el local Storage
    localStorage.removeItem ("Carrito");
    localStorage.setItem ("Carrito", JSON.stringify(arrayCarrito));
    e.preventDefault();
    modalRestaurant.classList.remove ('modalRestaurant--show');
});

modalRestaurant.addEventListener ('click', (e)=> {
    e.preventDefault();
    if (e.target.classList.contains ('modalRestaurant')) {
     //   modalRestaurant.classList.remove ('modalRestaurant--show');
    }
});


modalShopOpen.addEventListener ('click',(e)=>{
    // Guardo el carrito.

    if (arrayCarrito.length > 0) {
    construirPopCarrito (arrayCarrito);
    modalShop.classList.add ('modal_menu--show'); 
    }
    else {
        notifica ("El carrito está vacio");
    }

});

modalShopClose.addEventListener ('click',(e)=>{
    // Cada vez que cierro el modal del carrito borro el carrito y lo guardo en el local Storage
    localStorage.removeItem ("Carrito");
        if (arrayCarrito.length > 0 ) {
            localStorage.setItem ("Carrito", JSON.stringify(arrayCarrito));
         }
    modalShop.classList.remove ('modal_menu--show');
});

// Libero el Storage del Carrito solo cuando pulso en el botón del pago
// Al liberar el Storage actualizo el array del Carrito y reinicio todo.
closeCarritoPago.addEventListener ('click',(e)=>{
    localStorage.removeItem ("Carrito");

    notifica ("Su Pago ha sido realizado...");
    modalShop.classList.remove ('modal_menu--show');

    while (arrayCarrito.length > 0)
        arrayCarrito.pop();

    calcularTotalCarrito (arrayCarrito);

    // Regreso al index
    setTimeout(()=> location.href="/index.html",2000);

});


const filtrarCategory = (category) => {
           arrayShopCategory.splice (0,arrayShopCategory.length);
    for (i = 0; i < arrayRestaurant.length; i++) {
        if (arrayRestaurant[i].category == category ) {
            const ShopAdd = new Restaurant(
                arrayRestaurant[i].id,
                arrayRestaurant[i].nombre,
                arrayRestaurant[i].imagen,
                arrayRestaurant[i].top,
                arrayRestaurant[i].tiempo,
                arrayRestaurant[i].category
                )
                arrayShopCategory.push (ShopAdd);
        }
    }
    return arrayShopCategory;
}


const filtrarRestaurant10 = (points) => {
        arrayRestaurant10.splice (0,arrayRestaurant10.length);
    for (i = 0; i < arrayRestaurant.length; i++) {
       
        if ( (arrayRestaurant[i].top == parseInt (points) ) && (arrayRestaurant[i].category == "Restaurantes") ) {
            const RestaurantAdd = new Restaurant(
                arrayRestaurant[i].id,
                arrayRestaurant[i].nombre,
                arrayRestaurant[i].imagen,
                arrayRestaurant[i].top,
                arrayRestaurant[i].tiempo,
                arrayRestaurant[i].category
                )
                arrayRestaurant10.push (RestaurantAdd);
        }
    }

    return arrayRestaurant10;
}


const filtrarProduct = (nombre) => {
        arrayProductFilter.splice (0, arrayProductFilter.length);
    for (i = 0; i < arrayProductRestaurant.length; i++) {
        if (arrayProductRestaurant[i].restaurant == nombre) {

            const productoAdd = new productRestaurant(
                arrayProductRestaurant[i].idRestaurant,
                arrayProductRestaurant[i].idProduct,
                arrayProductRestaurant[i].restaurant,
                arrayProductRestaurant[i].category,
                arrayProductRestaurant[i].nombre,  
                arrayProductRestaurant[i].image,              
                arrayProductRestaurant[i].price
                )
            arrayProductFilter.push (productoAdd);
        }
    }

    return arrayProductFilter;
}


const addCarrito = (idRestaurant, idProduct, restaurant, quantity, category, nombre, image, price ) => {
    const carritoAdd = new carrito (idRestaurant, idProduct, restaurant, quantity, category, nombre, image, price)
    arrayCarrito.push (carritoAdd);
}




// Busco producto por idRestaurant y idProduct
    function findQuantityProduct (idRestaurant, idProduct) {
        return ((arrayCarrito.idRestaurant === idRestaurant) &&  (arrayCarrito.idProduct === idProduct))
    }


// Esta función agrega líneas en el carrito agrupándolas por artículo
// Sería conveniente ordenar por restaurante / Producto
const alterCarrito = (idRestaurant, idProduct, restaurant, valor, category, nombre, image, price, arrayCarrito, symbol) => {

    let existe  = 0;

    // Si el array del carrito está vacío grabo una línea sin mas
    if (arrayCarrito.length === 0) {
        addCarrito 
        (idRestaurant, idProduct, restaurant, valor, 
        category, nombre, image, price);
    }
    // Si el array Carrito no está vacío...
    // En este else si al recorrer el carrito existe añado una cantidad
    else {
        arrayCarrito.forEach ((arrayCarritogroup) => {
            if (nombre == arrayCarritogroup.nombre) {
                (symbol == "+") ? arrayCarritogroup.quantity += valor : arrayCarritogroup.quantity -= valor;
                existe = 1;
            }
        });
        // Si no existe agrego una línea normal
        if (existe == 0) {
            addCarrito 
            (idRestaurant, idProduct, restaurant, valor, 
            category, nombre, image, price);
            existe = 0;      
        }
    }

    // Borro las líneas que tengan cantidad 0
 

    for (i=0; i< arrayCarrito.length; i++){
        
        console.log ("borrando - "+arrayCarrito[i].nombre+" "+arrayCarrito[i].quantity+" "+arrayCarrito[i].quantity);
        if (arrayCarrito[i].quantity == 0) 
        {
            console.log ("voy a borrar - "+arrayCarrito[i].nombre);
            arrayCarrito.splice(i,1);
        }
    }


}

const addSumTotal = (nuevoValor) => {
    totalProducts += nuevoValor;
}


// Carga las tarjetas de los productos del restaurante en el popup menu al abrir el restaurante
const construirPopProducts = (restaurante) => {
    totalProducts = 0;
    let seccion_product_modal = document.getElementById ("seccion_product_modal")
    seccion_product_modal.innerHTML='';
    let tituloMenu = document.getElementById ("tituloMenu");
    let totalrest = 0;
    const action_Total   = document.getElementById ('captionTotal');
    action_Total.textContent = "Total $ "+totalProducts;

                // Muestro el total del restaurante ( -> pasar a una función )
                arrayCarrito.forEach(object => {
        
                    if ( (object.idRestaurant === restaurante[0].idRestaurant) ) {
                        totalrest += ( object.quantity * object.price );
                        action_Total.textContent = "Total $ "+totalrest;
                      }
                });

    // Este bucle construye las tarjetas de los productos del restaurante
  //  for (i in restaurante) {

    for (let i = 0; i < restaurante.length; i++) {  

        let card_product = document.createElement ("div");
        let boxImageProductCenter = document.createElement ("div");
        let boxImageProduct = document.createElement ("div");
        let imgRestaurant = document.createElement ("img");
        let desc_box_card_Description = document.createElement ("div");
        let desc_font_whiteBlack16 = document.createElement ("div");
        let desc_font_grayBold = document.createElement ("div");
        let box_card_Description_price = document.createElement ("div");
        let desc_font_whiteBlack16_price = document.createElement ("div");
        let box_card_ButtonAdd = document.createElement ("div");
        let button_green = document.createElement ("div");
        let box_card_Quantity = document.createElement ("div");
        let green_button_circle_Quantity = document.createElement ("div");
        let center_ico_white_quantity = document.createElement ("span");

      //  let button_green_svg = document.createElement ("svg");
        let spanButton_green = document.createElement ("span");
        
        let path_add = document.createElement ("path");

        card_product.className = "card_product";
        boxImageProductCenter.className = "boxImageProductCenter";
        boxImageProduct.className = "boxImageProduct";
        imgRestaurant.className = "imgRestaurant";
        
        desc_box_card_Description.className = "box_card_Description";
        desc_font_whiteBlack16.className = "font-whiteBlack16 overflow-visible";
        desc_font_grayBold.className = "font-grayBold overflow-visible";
        
        box_card_Quantity.className = "box_card_Quantity";
        green_button_circle_Quantity.className = "green_button_circle_Quantity";
        center_ico_white_quantity.className = "center_ico_white";

        box_card_Description_price.className = "box_card_Description_price";
        desc_font_whiteBlack16_price.className = "font-whiteBlack16 overflow-visible";
        
        box_card_ButtonAdd.className = "box_card_ButtonAdd";


        button_green.id = restaurante [i].price;  
        button_green.className = "green_button_circle action_add";
        spanButton_green.className = "material-symbols-outlined center_ico_white";
     //   spanButton_green.name = "action_add";

        seccion_product_modal.appendChild (card_product);
           card_product.appendChild (boxImageProductCenter);
                boxImageProductCenter.appendChild (boxImageProduct);
                    boxImageProduct.appendChild (imgRestaurant);

            card_product.appendChild (desc_box_card_Description);
                desc_box_card_Description.appendChild (desc_font_whiteBlack16);
                desc_box_card_Description.appendChild (desc_font_grayBold);
        
            card_product.appendChild (box_card_Quantity);
                box_card_Quantity.appendChild (green_button_circle_Quantity);
                
            // Muestro la cantidad en cada tarjeta que ya hay en el carrito de ese producto                 
            arrayCarrito.forEach(object => {
                    if ( (object.idRestaurant === restaurante [i].idRestaurant) && (object.idProduct === restaurante [i].idProduct) ) {
                        green_button_circle_Quantity.appendChild (center_ico_white_quantity);
                        center_ico_white_quantity.textContent = object.quantity;
                    }
                });

            card_product.appendChild (box_card_Description_price);
                box_card_Description_price.appendChild (desc_font_whiteBlack16_price);

            card_product.appendChild (box_card_ButtonAdd);

            box_card_ButtonAdd.appendChild (button_green);
            button_green.appendChild (spanButton_green);
            tituloMenu.textContent = "Menú y precios "+restaurante [i].restaurant;

  
            spanButton_green.textContent = "add";
            desc_font_whiteBlack16.textContent     = restaurante [i].nombre;
            desc_font_whiteBlack16_price.textContent = "$ "+restaurante [i].price;   
            imgRestaurant.src = restaurante[i].image;

            const action_add   = document.getElementsByClassName ('action_add');

            action_add [i].addEventListener ('click',(e) => {
                e.preventDefault();
                addSumTotal (parseInt (action_add [i].id));
                cantidad = 0;
                cantidadArray = [];
                totalrestClick = 0;

                // Actualizo el total
                const action_Total   = document.getElementById ('captionTotal');
                action_Total.textContent = "Total $ "+totalProducts;

                // Voy actualizando el carrito cada vez que pulso + . -> Uso la desestructuración con el objeto restaurante[i]
                const {idRestaurant, idProduct, restaurant, category, nombre, image, price } = restaurante[i];

                alterCarrito (idRestaurant, idProduct, restaurant, 1, 
                    category, nombre, image, price, arrayCarrito,"+");

                // Muestro la cantidad en cada tarjeta que ya hay en el carrito de ese producto  
                    arrayCarrito.forEach(object => {
                        if ( (object.idRestaurant === idRestaurant) && (object.idProduct === idProduct) ) {
                            green_button_circle_Quantity.appendChild (center_ico_white_quantity);
                            center_ico_white_quantity.textContent = object.quantity;
                        }
                    });

                // Muestro el total del restaurante ( -> pasar a una función )
                    arrayCarrito.forEach(object => {
                        if ( (object.idRestaurant === idRestaurant) ) {
                            totalrestClick += ( object.quantity * object.price );
                            action_Total.textContent = "Total $ "+totalrestClick;
                            }
                    });
                
                // Actualizo el total del Carrito 
                calcularTotalCarrito (arrayCarrito);

            } );
    }

}   

// Construyo el carrito con los restaurantes y sus productos comprados en el carrito
const construirPopCarrito = (arrayCarrito) => {
    
    //Primero ordeno el array arrayCarrito con idRestaurante
    arrayCarrito = arrayCarrito.sort(function (first, last){
        return (first.idRestaurant - last.idRestaurant);
    })


    // Identifico el DIV desde donde armo las tarjetas
    let seccion_product_modal = document.getElementById ("seccion_product_modalShop")
    seccion_product_modal.innerHTML='';

    let card_RestaurantShop  = document.createElement ("div");
 
    seccion_product_modal.appendChild (card_RestaurantShop);
    //Recorro el array Ordenado armando primero como título el restaurante
    let idRestaurant = ""


    //console.log ("arrayCarrito desde construirPopCarrito -> "+arrayCarrito.length)

    for (let i = 0; i < arrayCarrito.length; i++) {  

        let box_card_Description = document.createElement ("div");
        let fontRestaurant = document.createElement ("div");
        let card_productShop = document.createElement ("div");
        let boxImageProductCenterShop = document.createElement ("div");
        let boxImageProductShop = document.createElement ("div");
        let imgRestaurantShop = document.createElement ("img");
        let box_card_DescriptionProduct = document.createElement ("div");
        let fontProduct = document.createElement ("div");
        let fontAmount = document.createElement ("div");
        // Tarjeta para editar cantidad
        let card_edit_product = document.createElement ("div");
        let addCardProduct = document.createElement ("div");
        let fontQuantity = document.createElement ("div");
        let removeCardProduct = document.createElement ("div");

        addCardProduct.id = arrayCarrito[i].price;
        removeCardProduct.id = arrayCarrito[i].price;

        card_RestaurantShop.className = "card_RestaurantShop";
        box_card_Description.className = "box_card_Description";
        fontRestaurant.className = "font-whiteBlack16 overflow-visible";

        card_productShop.id = "card"+arrayCarrito[i].idRestaurant+arrayCarrito[i].idProduct;
        card_productShop.className = "card_productShop";
        boxImageProductCenterShop.className = "boxImageProductCenterShop";
        boxImageProductShop.className = "boxImageProductShop";
        imgRestaurantShop.className = "imgRestaurantShop"
        box_card_DescriptionProduct.className = "box_card_Description";
        fontProduct.className = "font-whiteGray14Lite overflow-visible";
        fontAmount.className = "font-whiteBlack14 overflow-visible";

        // Tarjeta para editar cantidad
        card_edit_product.className = "card_edit_product";
        addCardProduct.className = "material-symbols-outlined pointer action_add_shop";
        fontQuantity.className = "font-white14LiteCard";
        removeCardProduct.className = "material-symbols-outlined pointer action_remove_shop";

        if ((idRestaurant == "") || (idRestaurant != arrayCarrito[i].idRestaurant) ) 
        {
            idRestaurant = arrayCarrito[i].idRestaurant;
            if (idRestaurant == arrayCarrito[i].idRestaurant) {
                    card_RestaurantShop.appendChild (box_card_Description);
                        box_card_Description.appendChild (fontRestaurant)
                        fontRestaurant.textContent = arrayCarrito[i].restaurant;
            };
        }

         card_RestaurantShop.appendChild (card_productShop);
            
            card_productShop.appendChild (boxImageProductCenterShop);
                boxImageProductCenterShop.appendChild (boxImageProductShop)
                    boxImageProductShop.appendChild (imgRestaurantShop)
                
            card_productShop.appendChild (box_card_DescriptionProduct);
                box_card_DescriptionProduct.appendChild (fontProduct);
                box_card_DescriptionProduct.appendChild (fontAmount);    

            card_productShop.appendChild (card_edit_product);
                card_edit_product.appendChild (addCardProduct);
                card_edit_product.appendChild (fontQuantity);
                card_edit_product.appendChild (removeCardProduct);

                addCardProduct.textContent    = "add";
                fontQuantity.textContent      = arrayCarrito[i].quantity;
                removeCardProduct.textContent = "remove";
                                            
                fontProduct.textContent = arrayCarrito[i].nombre;
                fontAmount.textContent  = "$ "+arrayCarrito[i].price+" * "+arrayCarrito[i].quantity+" = $ "+parseInt (arrayCarrito[i].quantity * arrayCarrito[i].price);
                imgRestaurantShop.src   = arrayCarrito[i].image;

                const action_add_shop     = document.getElementsByClassName ('action_add_shop');
                const action_remove_shope = document.getElementsByClassName ('action_remove_shop');

                action_add_shop [i].addEventListener ('click',(e) => {
                    e.preventDefault();
                    addSumTotal (parseInt (action_add_shop [i].id));
                    cantidad = 0;
                    cantidadArray = [];
                    totalrestClick = 0;
    
                    // Actualizo el total
                    const action_Total   = document.getElementById ('captionTotal');
                    action_Total.textContent = "Total $ "+totalProducts;

                    // Voy actualizando el carrito cada vez que pulso + . -> Uso la desestructuración con el objeto restaurante[i]
                    const {idRestaurant, idProduct, restaurant, category, nombre, image, price } = arrayCarrito[i];


                    alterCarrito (idRestaurant, idProduct, restaurant, 1, 
                        category, nombre, image, price, arrayCarrito,"+");
    
                    // Muestro la cantidad en cada tarjeta que ya hay en el carrito de ese producto  
                        arrayCarrito.forEach(object => {
                            if ( (object.idRestaurant === idRestaurant) && (object.idProduct === idProduct) ) {
                                fontQuantity.textContent = object.quantity;
                                fontAmount.textContent  = "$ "+object.price+" * "+object.quantity+" = $ "+parseInt (object.quantity * object.price);
                            }
                        });
    
                    // Muestro el total del restaurante ( -> pasar a una función )
                        arrayCarrito.forEach(object => {
                            if ( (object.idRestaurant === idRestaurant) ) {
                                totalrestClick += ( object.quantity * object.price );
                                action_Total.textContent = "Total $ "+totalrestClick;
                                }
                        });
                    
                    // Actualizo el total del Carrito 
                    calcularTotalCarrito (arrayCarrito);
    
                } );

                action_remove_shope [i].addEventListener ('click',(e) => {
                    e.preventDefault();
                    addSumTotal (parseInt (action_add_shop [i].id));
                    cantidad = 0;
                    cantidadArray = [];
                    totalrestClick = 0;
    
                    // Actualizo el total
                    const action_Total   = document.getElementById ('captionTotal');
                    action_Total.textContent = "Total $ "+totalProducts;

                    // Voy actualizando el carrito cada vez que pulso + . -> Uso la desestructuración con el objeto restaurante[i]
                    const {idRestaurant, idProduct, restaurant, category, nombre, image, price } = arrayCarrito[i];

                    // Muestro la cantidad en cada tarjeta que ya hay en el carrito de ese producto  
                        arrayCarrito.forEach(object => {
                            if ( (object.idRestaurant === idRestaurant) && (object.idProduct === idProduct) ) {

                                alterCarrito (idRestaurant, idProduct, restaurant, 1, 
                                    category, nombre, image, price, arrayCarrito,"-");

                                if (object.quantity == 0) {
                                    card_productShop.style.display = "none";
                                }

                                fontQuantity.textContent = object.quantity;
                                fontAmount.textContent  = "$ "+object.price+" * "+object.quantity+" = $ "+parseInt (object.quantity * object.price);
                    
                            }
                        });
    
                    // Muestro el total del restaurante ( -> pasar a una función )
                        arrayCarrito.forEach(object => {
                            if ( (object.idRestaurant === idRestaurant) ) {
                                totalrestClick += ( object.quantity * object.price );
                                action_Total.textContent = "Total $ "+totalrestClick;
                                }
                        });
                    
                    // Actualizo el total del Carrito 
                    calcularTotalCarrito (arrayCarrito);
    
                } );

    }

}