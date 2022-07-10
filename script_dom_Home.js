
const arrayCategory = [];
let contadorID      = 0;


class Category {
    constructor (id, nombre, imagen) {
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen
        return this;
    }
}

 const addCategory = (nombre, imagen) => {
        const categoryAdd = new Category(parseInt (++contadorID),nombre,imagen)
        arrayCategory.push (categoryAdd);
    }

    addCategory ("Restaurantes", "./assets/category/restaurants.webp" );
    addCategory ("Super", "./assets/category/cpgs.webp" );
    addCategory ("Farmacia", "./assets/category/pharmacy.webp" );
    addCategory ("Express", "./assets/category/express.webp" );
    addCategory ("Tiendas", "./assets/category/store_type.webp" );
    addCategory ("Licores", "./assets/category/spirits.webp" );
    addCategory ("Travel", "./assets/category/travel.webp" );
    addCategory ("Turbo-Fresh", "./assets/category/8min.webp" );


let box_category = document.getElementById ("box_category")


    for (let index = 0; index < arrayCategory.length; index++) {

        console.log (arrayCategory[index].nombre);
        console.log (arrayCategory[index].imagen);


        let card_category = document.createElement ("div");
        let img_category = document.createElement ('img');
        let box_textCategory = document.createElement ("div");
        let font_whiteBlack16 = document.createElement ("a");
        let material_symbols_outlined = document.createElement ("span");
        
        card_category.className = "card_category";
        img_category.className = "img_category";
        box_textCategory.className = "box_textCategory";
        font_whiteBlack16.className = "font-whiteBlack16 text_category";
        material_symbols_outlined.className = "material-symbols-outlined arrow_red";

        img_category.setAttribute ("id","cat_"+arrayCategory[index].nombre);
        img_category.src = arrayCategory[index].imagen;
        font_whiteBlack16.textContent = arrayCategory[index].nombre;
        material_symbols_outlined.textContent = "trending_flat";

            box_category.appendChild (card_category);
                card_category.appendChild (img_category);
                card_category.appendChild (box_textCategory);
                    box_textCategory.appendChild (font_whiteBlack16);
                    box_textCategory.appendChild (material_symbols_outlined);

    }


    /*

    <div class="card_category">
        <img class="img_category" src="./assets/category/restaurants.webp" alt="restaurants">
        <div class="box_textCategory">
            <a class="font-whiteBlack16 text_category">Restaurantes</a>
            <span class="material-symbols-outlined arrow_red" >trending_flat</span>
        </div>
    </div>

    */



    