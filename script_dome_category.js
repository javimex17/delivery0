const arrayRestaurant = [];

let contadorID = 0;

const arrayNomRestaurant = [
    ["Franco Cocina Honesta", "4.2", "30"], 
    ["Taquearte", "4", "30"],
    ["McDonald's", "5", "30"],
    ["kabuki Sushi", "5", "25"],
    ["Nimi's", "4.5", "20"],
    ["Shake Shack", "4", "40"],
    ["Little Caesars", "4.5", "30"],
    ["El Japonez", "5", "34"],
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
    ["Carl's Jr.", "5", "30"]
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

for (let index = 0; index < arrayRestaurant.length; index++) {

    console.log (arrayRestaurant[index].imagen);

    let card_restaurant = document.createElement ("div");
    let boxImageCenter = document.createElement ("div");
    let boxImage = document.createElement ("div");
    let imgRestaurant = document.createElement ("img");
    let boxNomRestaurant_bnd_nom = document.createElement ("div");
    let font_whiteBlack16Lite_nom = document.createElement ("a");
    let boxNomRestaurant_bnd_tiempo = document.createElement ("div");
    let font_whiteBlack16Lite_tiempo = document.createElement ("a");



    card_restaurant.className = "card_restaurant";
    boxImageCenter.className = "boxImageCenter";
    boxImage.className = "boxImage";
    imgRestaurant.className = "imgRestaurant";

    boxNomRestaurant_bnd_nom.className = "boxNomRestaurant_bnd";
    font_whiteBlack16Lite_nom.className = "font-whiteGray14Lite";
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



}

/*

            <div class="card_restaurant">  
                <div class="boxImageCenter">
                    <div class="boxImage">
                      <img class="imgRestaurant" src="assets/restaurants/mcdonalds.webp" alt="Cargando imagen...">
                    </div>
                </div>
                <div class="boxNomRestaurant_bnd">
                    <a class="font-whiteBlack16Lite">McDonald's</a>
                </div>
                <div class="boxNomRestaurant_bnd">
                    <a class="font-whiteGray14Lite">30 min</a>
                </div>
              </div>




    card_restaurant.appendChild (banner_section_Cards);
        boxImageCenter.appendChild (card_restaurant);
            boxImage.appendChild (boxImageCenter);
                imgRestaurant.appendChild (boxImage);

        boxNomRestaurant_bnd_nom.appendChild (card_restaurant);
            font_whiteBlack16Lite_nom.appendChild (boxNomRestaurant_bnd_nom);
        boxNomRestaurant_bnd_tiempo.appendChild (card_restaurant);
            font_whiteBlack16Lite_tiempo.appendChild (boxNomRestaurant_bnd_tiempo);



*/