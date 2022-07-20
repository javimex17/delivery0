const openModalRestaurant       = document.getElementsByClassName('action_menuRestaurant');
const modalRestaurant           = document.querySelector('.modalRestaurant');
const closeModalRestaurant      = document.querySelector('.modal__closeRestaurant');
const closeCarritoPago          = document.getElementById ('closeCarritoPago');
const modalShopOpen             = document.getElementById('action_menu_shop');
const modalShopClose            = document.getElementById('modal_menu__close');
const modalShopRestaurantClose  = document.getElementById('closeAddRestaurant');
const modalShop                 = document.querySelector ('.modal_menu')
const closeModalGeneral         = document.querySelector ('.modal__closeRestaurant');

const arrayRestaurant           = [];
const arrayProductFilter        = [];
let arrayCarrito                = [];

// Si el carrito existe lo cargo en arrayCarrito para seguir usándolo --> Uso operador Lógico
(localStorage.getItem ("Carrito") != null ) &&  ( arrayCarrito = JSON.parse (localStorage.getItem ('Carrito')) );


// Con la función calcularTotalCarrito Recorro el Carrito y lo muestro en pantalla
const calcularTotalCarrito = (arrayCarrito) => {

    //totalCarrito
    let totalCarrito = document.getElementById ("totalCarrito");
    let captionModalTotal = document.getElementById ("captionModalTotal");
    let totalRest = 0;
    arrayCarrito.forEach(object => {        
        totalRest += ( object.quantity * object.price );
    });
    // Actualizo el carrito en la pantalla general y en el Modal del detalle del carrito
    totalCarrito.textContent      = "$ "+parseInt (totalRest);
    captionModalTotal.textContent = "$ "+parseInt (totalRest);

}

// Llamo a la función calcularTotalCarrito para mostrar el botón con el total
calcularTotalCarrito (arrayCarrito);

let totalProducts = 0;
let contadorID = 0;



const arrayNomTurbo = [
    ["Wallmart", "4", "30","Turbo"]
]


const arrayNomTravel = [
    ["Wego", "4", "30", "Travel"]
]


const arrayNomLicores = [
    ["Casa Tequila", "4", "30", "Licores"], 
    ["Corona", "4", "30", "Licores"],
]

const arrayNomExpress = [
    ["Wallmart", "4", "30", "Express"]

]


const arrayNomFarmacia = [
    ["Benavides", "4", "30", "Farmacia"], 
    ["Farmacias Similares", "4", "30", "Farmacia"],
    ["YZA", "5", "30", "Farmacia"],
    ["San Pablo", "5", "25", "Farmacia"],
]


const arrayNomSuper = [
    ["Wallmart", "4", "30", "Super"], 
    ["Soriana", "4", "30", "Super"],
    ["Costco", "5", "30", "Super"],
    ["Chedraui", "5", "25", "Super"],
]


const arrayNomRestaurant = [
    ["Franco Cocina Honesta", "4.2", "30", "Restaurant"], 
    ["Taquearte", "4", "30", "Restaurant"],
    ["McDonald's", "5", "30", "Restaurant"],
    ["Kabuki Sushi", "5", "25", "Restaurant"],
    ["Nimi's", "4.5", "20", "Restaurant"],
    ["Shake Shack", "4", "40", "Restaurant"],
    ["Little Caesars", "4.5", "30", "Restaurant"],
    ["El Japonez", "5", "34", "Restaurant"],
    ["Taco Naco", "4.5", "30", "Restaurant"],
    ["Sushi Itto", "4", "45", "Restaurant"],
    ["Las Alitas", "4.5", "40", "Restaurant"],
    ["Hooters", "5", "30", "Restaurant"],
    ["El Tizoncito", "4", "30", "Restaurant"]
  //  ["Papa Johns", "4.3", "35"]
/*
    ["KFC", "4.3", "35"],
    ["Mr Blanco's", "4.5", "45"],
    ["Burger King", "4", "34"],
    ["Taquería Orinoco", "4", "32"],
    ["Sliders", "4.4", "30"],
    ["Tori Tori", "4,5", "35"],
    ["Koku", "3", "35"],
    ["We Love Burgers", "4", "32"],
    ["Carl's Jr.", "5", "30"]*/
];

// Array uniendo los array de nombres de categorías
const arrayNom = [
    ...arrayNomTurbo,
    ...arrayNomTravel,
    ...arrayNomLicores,
    ...arrayNomExpress,
    ...arrayNomFarmacia,
    ...arrayNomSuper,
    ...arrayNomRestaurant
    ]



const arrayProductRestaurant = [
    ["1","1","Franco Cocina Honesta","Promo del mes","Bowl de pollo","240"],
    ["1","2","Franco Cocina Honesta","Promo del mes","Ensalada vegetales","192"],
    ["1","3","Franco Cocina Honesta","Entradas","Sopa Marroquí","76"],
    ["1","4","Franco Cocina Honesta","Entradas","Tostada de vegetales","103"],
    ["1","5","Franco Cocina Honesta","Entradas","Tostada de trucha","119"],
    ["1","6","Franco Cocina Honesta","Entradas","Crema de Papa","76"],
    ["1","7","Franco Cocina Honesta","Entradas","Tartar de salmón","124"],
    ["1","8","Franco Cocina Honesta","Bowls","Bowl vegano","150"],
    ["1","9","Franco Cocina Honesta","Bowls","Bowl chimichurri","160"],
    ["1","10","Franco Cocina Honesta","Bowls","Bowl de salmón","240"],
    ["1","11","Franco Cocina Honesta","Bowls","Bowl de pollo","240"],
    ["1","12","Franco Cocina Honesta","Sándwiches","Sándwich de pollo","136"],
    ["1","13","Franco Cocina Honesta","Sándwiches","Sándwich de milanesa","136"],
    ["1","14","Franco Cocina Honesta","Sándwiches","Sándwich de pavo","136"],
    ["2","1","Taquearte","Promociones","Combo Ta Con Todo","170"],
    ["2","2","Taquearte","Promociones","Combo El Cuarteto Perfecto","291"],
    ["2","3","Taquearte","Promociones","Combo Pepsi Con Todo","532"],
    ["2","4","Taquearte","Fogonadas","Fogonada Pastor","169"],
    ["2","5","Taquearte","Fogonadas","Fogonada Bistec","169"],
    ["2","6","Taquearte","Fogonadas","Fogonada Costilla","169"],
    ["2","7","Taquearte","Tacos","Taco de Pastor","39"],
    ["2","8","Taquearte","Tacos","Taco de Bistec","49"],
    ["2","9","Taquearte","Tacos","Taco de Costilla","49"],
    ["3","1","McDonald's","Mctrios Comida","Mctrío McCrispy","160"],
    ["3","2","McDonald's","Mctrios Comida","Mctrío Big Mac","160"],
    ["3","3","McDonald's","Mctrios Comida","McTrío Signature","160"],
    ["3","4","McDonald's","Mctrios Comida","McTrío Mcnifica","160"],
    ["4","1","Kabuki Sushi","Promo","Combo California","75"],
    ["4","2","Kabuki Sushi","Promo","Tata Maki","180"],
    ["4","3","Kabuki Sushi","Promo","Cilantro","172"],
    ["4","4","Kabuki Sushi","Promo","Kiwi","172"],
    ["4","5","Kabuki Sushi","Sushi","Kani Roll","86"],
    ["4","6","Kabuki Sushi","Sushi","Tiger Roll","172"],
    ["4","7","Kabuki Sushi","Sushi","Kabuki Roll","86"],
    ["4","8","Kabuki Sushi","Sushi","Dragon Roll","86"],
    ["5","1","Nimi's","Pitas","Pita de pollo","135"],
    ["5","2","Nimi's","Pitas","Pita de Falafel","103"],
    ["5","3","Nimi's","Pitas","Pita Kebab","135"],
    ["5","4","Nimi's","Humus","Hummus Kebab","127"],
    ["5","5","Nimi's","Humus","Hummus Pollo","127"],
    ["5","6","Nimi's","Humus","Hummus Falafel","100"],
    ["6","1","Shake Shack","Burgers","Avocado Bacon Burger","190"],
    ["6","2","Shake Shack","Burgers","ShackBurger","118"],
    ["6","3","Shake Shack","Burgers","Smokeshack","169"],
    ["6","4","Shake Shack","Burgers","Shroom Burger","175"],
    ["6","5","Shake Shack","Burgers","Shack Stack","220"],
    ["6","6","Shake Shack","Papas","Papas","67"],
    ["6","7","Shake Shack","Papas","Papas Con Queso","110"],
    ["6","8","Shake Shack","Papas","Papas Con Queso Y Tocino","150"],
    ["7","1","Little Caesars","Paquetes","Paquete Super Cheese","215"],
    ["7","2","Little Caesars","Paquetes","Paquete Fiesta","249"],
    ["7","3","Little Caesars","Paquetes","Combo Trío","319"],
    ["7","4","Little Caesars","Paquetes","Paquete Especial","529"],
    ["7","5","Little Caesars","Paquetes","Combo Pizzamanía","259"],
    ["7","6","Little Caesars","Pizzas","Pizza Pepperoni","115"],
    ["7","7","Little Caesars","Pizzas","Pizza de Queso","109"],
    ["7","8","Little Caesars","Pizzas","Pizza Ultimate Supreme","179"],
    ["7","9","Little Caesars","Pizzas","Pizza Three Meat Treat","179"],
    ["7","10","Little Caesars","Pizzas","Pizza Super Cheese","209"],
    ["8","1","El Japonez","Entradas","Gyosas","120"],
    ["8","2","El Japonez","Entradas","Robalo Roca","361"],
    ["8","3","El Japonez","Entradas","Rollitos Tokio","268"],
    ["8","4","El Japonez","Entradas","Spring Roll","169"],
    ["8","5","El Japonez","Brochetas","Brocheta Res","190"],
    ["8","6","El Japonez","Brochetas","Brocheta de Salmón","540"],
    ["8","7","El Japonez","Brochetas","Brocheta Yakitori","100"],
    ["9","1","Taco Naco","Entradas","Chicharrón de queso","90"],
    ["9","2","Taco Naco","Entradas","Guacamole","70"],
    ["9","3","Taco Naco","Entradas","Tuetanos","130"],
    ["9","4","Taco Naco","Entradas","Nopales","50"],
    ["9","5","Taco Naco","Tacos","Taco Picaña","60"],
    ["9","6","Taco Naco","Tacos","Taco de Sirloin","60"],
    ["9","7","Taco Naco","Tacos","Taco New York","60"],
    ["9","8","Taco Naco","Tacos","Taco de Rib Eye","60"],
    ["10","1","Sushi Itto","Entradas","Edamames","90"],
    ["10","2","Sushi Itto","Entradas","Vota","90"],
    ["10","3","Sushi Itto","Entradas","Camarones","190"],
    ["10","4","Sushi Itto","Entradas","Baby Squid","130"],
    ["10","5","Sushi Itto","Ramen","Chopu-men","200"],
    ["10","6","Sushi Itto","Ramen","Umi-men","200"],
    ["10","7","Sushi Itto","Ramen","Ebi-men","200"],
    ["10","8","Sushi Itto","Ramen","Kotsu-men","200"],
    ["11","1","Las Alitas","Alitas","Boneless Dobles","90"],
    ["11","2","Las Alitas","Alitas","Platón Boneless","80"],
    ["11","3","Las Alitas","Alitas","Boneless Snack","90"],
    ["11","4","Las Alitas","Alitas","Magic Mike","100"],
    ["11","5","Las Alitas","Alitas","Strippers","70"],
    ["11","6","Las Alitas","Hamburguesas","Devil","190"],
    ["11","7","Las Alitas","Hamburguesas","Buffalo","200"],
    ["11","8","Las Alitas","Hamburguesas","Clásica","210"],
    ["11","9","Las Alitas","Hamburguesas","Millonaria","200"],
    ["12","1","Hooters","Entradas","Mac&Cheese","80"],
    ["12","2","Hooters","Entradas","Caesar Salad","80"],
    ["12","3","Hooters","Entradas","Bacon Wraped","80"],
    ["12","4","Hooters","Wings","Wings Original","300"],
    ["12","5","Hooters","Wings","Wings Medium","300"],
    ["12","6","Hooters","Wings","Wings Large","300"],
    ["12","7","Hooters","Wings","Wings Small","300"],
    ["13","1","El Tizoncito","Entradas","Chicharrón de queso","40"],
    ["13","2","El Tizoncito","Entradas","Guacamole","50"],
    ["13","3","El Tizoncito","Tacos","Orden de Chorizo","140"],
    ["13","4","El Tizoncito","Tacos","Orden de Pollo","150"],
    ["13","5","El Tizoncito","Tacos","Orden de Bistec","130"]

    /*
    ["14","1","Papa Jhons","Pizza","Margarita","200"],
    ["14","2","Papa Jhons","Pizza","Marinara","240"],
    ["14","3","Papa Jhons","Pizza","Diavola","250"],
    ["14","4","Papa Jhons","Pizza","Venice","260"],
    ["14","5","Papa Jhons","Pizza","Ricotta","250"]
    */
   
]

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

class Restaurant {
    constructor (id, nombre, imagen, top, tiempo) {
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.top = top,
        this.tiempo = tiempo
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
    construirPopCarrito (arrayCarrito);
    modalShop.classList.add ('modal_menu--show'); 

});


modalShopClose.addEventListener ('click',(e)=>{
    // Cada vez que cierro el modal del carrito borro el carrito y lo guardo en el local Storage
    localStorage.removeItem ("Carrito");
    localStorage.setItem ("Carrito", JSON.stringify(arrayCarrito));
    modalShop.classList.remove ('modal_menu--show');
});

// Libero el Storage del Carrito solo cuando pulso en el botón del pago
// Al liberar el Storage actualizo el array del Carrito y reinicio todo.
closeCarritoPago.addEventListener ('click',(e)=>{
    localStorage.removeItem ("Carrito");
    alert ("Su Pago ha sido realizado... -> (RemoveStorage)")
    modalShop.classList.remove ('modal_menu--show');

    while (arrayCarrito.length > 0)
        arrayCarrito.pop();

    calcularTotalCarrito (arrayCarrito);

});


// en esta función a partir del nombre de un restaurante lleno un array filtrado con un objeto
// Limpio cada vez en array antes de llenarlo otra vez


// hacer un filter ...

// función que guarda el arrayCarrito en el local Storage


const filtrarProduct = (nombre) => {
    
    while (arrayProductFilter.length > 0)
        arrayProductFilter.pop();
    for (i = 0; i < arrayProductRestaurant.length; i++) {
        if (arrayProductRestaurant[i][2] == nombre) {

            const productoAdd = new productRestaurant(
                arrayProductRestaurant[i][0],
                arrayProductRestaurant[i][1],
                arrayProductRestaurant[i][2],
                arrayProductRestaurant[i][3],
                arrayProductRestaurant[i][4],  
                "./assets/restaurants/"+arrayProductRestaurant[i][2]+"/"+arrayProductRestaurant[i][4]+".png",              
                arrayProductRestaurant[i][5]
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

const addRestaurant = (nombre, imagen, top, tiempo) => {
    const restaurantAdd = new Restaurant(parseInt (++contadorID),nombre,imagen, top, tiempo)
    arrayRestaurant.push (restaurantAdd);
}


// Busco producto por idRestaurant y idProduct
    function findQuantityProduct (idRestaurant, idProduct) {
        return ((arrayCarrito.idRestaurant === idRestaurant) &&  (arrayCarrito.idProduct === idProduct))
    }


// Esta función agrega líneas en el carrito agrupándolas por artículo
// Sería conveniente ordenar por restaurante / Producto
const alterCarrito = (idRestaurant, idProduct, restaurant, valor, category, nombre, image, price, arrayCarrito) => {

    let mensaje = '';
    let existe  = 0;

    if (arrayCarrito.length === 0) {
        addCarrito 
        (idRestaurant, idProduct, restaurant, valor, 
        category, nombre, image, price);
     //   alert ("No existe, array vacio "); 
    }
    else {
        arrayCarrito.forEach ((arrayCarritogroup, index) => {
            if (nombre == arrayCarritogroup.nombre) {
                arrayCarritogroup.quantity += valor;
                existe = 1;
            }
        });
        if (existe == 0) {
            addCarrito 
            (idRestaurant, idProduct, restaurant, valor, 
            category, nombre, image, price);
            existe = 0;      
        }
    }

}


for (let i = 0; i < arrayNomRestaurant.length; i++) {
    addRestaurant (arrayNomRestaurant[i][0], 
        "./assets/restaurants/restaurant_"+parseInt(i+1)+".webp",
        arrayNomRestaurant[i][1], arrayNomRestaurant[i][2]);
}

let banner_section_Cards = document.getElementById ("banner_section_Cards")

const addSumTotal = (nuevoValor) => {
    totalProducts += nuevoValor;
}


// for each
// Con este bucle recorro los restaurantes de arrayNomRestaurant y creo las tarjetas.
for (let index = 0; index < arrayRestaurant.length; index++) {

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
    card_restaurant.setAttribute ("id", arrayRestaurant[index].nombre);

    boxNomRestaurant_bnd_tiempo.className = "boxNomRestaurant_bnd";
    font_whiteBlack16Lite_tiempo.className = "font-whiteGray14Lite";

    imgRestaurant.src = arrayRestaurant[index].imagen;
    font_whiteBlack16Lite_nom.textContent = arrayRestaurant[index].nombre;
    font_whiteBlack16Lite_tiempo.textContent = arrayRestaurant[index].tiempo+" min";

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
    for (let i = 0; restaurante.length -1; i++) {
        

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

            console.log (restaurante [i].nombre);
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
                    category, nombre, image, price, arrayCarrito);

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


                // Voy actualizando el carrito cada vez que pulso +
          /*      alterCarrito (restaurante [i].idRestaurant, restaurante [i].idProduct, restaurante [i].restaurant, 1, 
                    restaurante [i].category, restaurante [i].nombre, restaurante [i].image, restaurante[i].price, arrayCarrito);   */
                   
                // Muestro la cantidad en cada tarjeta que ya hay en el carrito de ese producto  
          /*
                arrayCarrito.forEach(object => {
                    if ( (object.idRestaurant === restaurante [i].idRestaurant) && (object.idProduct === restaurante [i].idProduct) ) {
                        green_button_circle_Quantity.appendChild (center_ico_white_quantity);
                        center_ico_white_quantity.textContent = object.quantity;
                    }
                });
            */
            

                
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
        arrayCarrito.forEach (object => {

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


            card_RestaurantShop.className = "card_RestaurantShop";
            box_card_Description.className = "box_card_Description";
            fontRestaurant.className = "font-whiteBlack16 overflow-visible";

            card_productShop.className = "card_productShop";
            boxImageProductCenterShop.className = "boxImageProductCenterShop";
            boxImageProductShop.className = "boxImageProductShop";
            imgRestaurantShop.className = "imgRestaurantShop"
            box_card_DescriptionProduct.className = "box_card_Description";
            fontProduct.className = "font-whiteGray14Lite overflow-visible";
            fontAmount.className = "font-whiteBlack14 overflow-visible";

            // Tarjeta para editar cantidad
            card_edit_product.className = "card_edit_product";
            addCardProduct.className = "material-symbols-outlined";
            fontQuantity.className = "font-white14LiteCard";
            removeCardProduct.className = "material-symbols-outlined";

            
            if ((idRestaurant == "") || (idRestaurant != object.idRestaurant) ) 
            {
                idRestaurant = object.idRestaurant;
           //     alert (object.restaurant);
                if (idRestaurant == object.idRestaurant) {
                        card_RestaurantShop.appendChild (box_card_Description);
                            box_card_Description.appendChild (fontRestaurant)
                            fontRestaurant.textContent = object.restaurant;
                };
            }

          //   alert (object.restaurant+" "+object.nombre);
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
                    fontQuantity.textContent      = object.quantity;
                    removeCardProduct.textContent = "remove";

                    fontProduct.textContent = object.nombre;
                    fontAmount.textContent  = "$ "+object.price+" * "+object.quantity+" = $ "+parseInt (object.quantity * object.price);
                    imgRestaurantShop.src   = object.image;

        });

}