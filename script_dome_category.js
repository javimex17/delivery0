const openModalRestaurant  = document.getElementsByClassName('action_menuRestaurant');
const modalRestaurant      = document.querySelector('.modalRestaurant');
const closeModalRestaurant = document.querySelector('.modal__closeRestaurant');

//openModalRestaurant.addEventListener('click',(e)=>{
  //  e.preventDefault();
    //modalRestaurant.classList.add ('modalRestaurant--show');
//});

closeModalRestaurant.addEventListener('click',(e)=>{
    e.preventDefault();
    modalRestaurant.classList.remove ('modalRestaurant--show');
});


const arrayRestaurant = [];
const arrayProductFilter = [];
let totalProducts = 0;

let contadorID = 0;

const arrayNomRestaurant = [
    ["Franco Cocina Honesta", "4.2", "30"], 
    ["Taquearte", "4", "30"],
    ["McDonald's", "5", "30"],
    ["Kabuki Sushi", "5", "25"],
    ["Nimi's", "4.5", "20"],
    ["Shake Shack", "4", "40"],
    ["Little Caesars", "4.5", "30"]
   /* ["El Japonez", "5", "34"],
    ["Taco Naco", "4.5", "30"],
    ["Sushi Roll", "4", "45"],
    ["Pola Poke", "4.5", "40"],
    ["Hooters", "5", "30"],
    ["El Naranjito", "3", "35"],
    ["El Tizoncito", "4", "30"],
    ["Papa John's", "4.3", "35"],
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
    ["7","10","Little Caesars","Pizzas","Pizza Super Cheese","209"]
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

// en esta función a partir del nombre de un restaurante lleno un array filtrado con un objeto
// Limpio cada vez en array antes de llenarlo otra vez
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


const addRestaurant = (nombre, imagen, top, tiempo) => {
    const restaurantAdd = new Restaurant(parseInt (++contadorID),nombre,imagen, top, tiempo)
    arrayRestaurant.push (restaurantAdd);
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
        console.log (openModalRestaurant[index].id);
        construirPopProducts ( filtrarProduct (openModalRestaurant[index].id) );
    });




}

// Carga las tarjetas de los productos del restaurante en el popup menu al abrir el restaurante
const construirPopProducts = (restaurante) => {
    totalProducts = 0;
    let seccion_product_modal = document.getElementById ("seccion_product_modal")
    seccion_product_modal.innerHTML='';
    let tituloMenu = document.getElementById ("tituloMenu");

    // Este bucle está forzado a 4 productos mientras resuelvo el desplazamiento dentro del popup
    for (let i = 0; i < 4; i++) {
        
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

            const action_Total   = document.getElementById ('captionTotal');
            action_Total.textContent = "Total $ "+totalProducts;

        /*
            
            const action_addNo = !!document.querySelector ('action_add');
            console.log ("Elemento ->",action_add);
            console.log ("Is Not null ? ",action_addNo);
        */            
    
            const action_add   = document.getElementsByClassName ('action_add');

            action_add [i].addEventListener ('click',(e)=>{
                e.preventDefault();
                console.log ("action ",action_add [i].id);
                addSumTotal (parseInt (action_add [i].id));
                const action_Total   = document.getElementById ('captionTotal');
                action_Total.textContent = "Total $ "+totalProducts;
            });
    }

}    

