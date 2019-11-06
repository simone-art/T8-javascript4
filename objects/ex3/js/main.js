let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];

class Navbar {
    render(){
        const navbar = `
        <img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
            <input class="input__search" type="search" placeholder="Search" aria-label="Search">
            <button class="button__search" onclick=""> Search </button>
        </div>
        `
        document.querySelector(".navbar").innerHTML = navbar

}
    
}

const renderNavbar = new Navbar
renderNavbar.render()


class Card{
    constructor(resultado){
        this.resultado = resultado
    }
    render() {
        return `<div class="card">
          <img class="imagem" src = ${this.resultado.imagem} />
          <h2>${this.resultado.titulo}</h2>
          <p class = "ingredientes">${this.resultado.ingredientes}</p>
          </div>`

        //   document.querySelector('.cards').insertAdjacentHTML(`beforeend`, Card)
        //   document.querySelector('.cards').innerHTML = resultados.map(card => {
        //       return rew Card(card).render
        //   }).join("")
      }

}

document.querySelector(".cards").innerHTML =
resultados.map((resultado) =>{
    return new Card(resultado).render()
}).join("")

// resultados.map((resultado) => {
//     new Card(resultado).render()
//   })

//ESTE COMPONENTE SE TUVO QUE RETORNAR GENERAL PORQUE CON LA CLASS ".CARDS" Y CONST CARD
// EL CÓDIGO QUEDA EN ESPECÍFICO Y TIENES QUE COLOCARLO EN GENERAL PARA QUE LO PUEDAS
//REUTILIZAR. LA CLASS ".CARDS" LO TORNA ESPECÍFICO Y CUANDO REUTILIZAS EL CÓDIDO DA UN
//ERROR. AL HACERLO GENERAL, COLOCAS EL RETURN DESPUÉS DE RENDER Y EL MAP FUERA DEL RENDER.
//AL HACERLO EN ESPECÍFICO COLOCAS LA VARIABLES ANTES DEL RENDER  Y ACTIVAS EL
//document.querySelector('.cards').insertAdjacentHTML(`beforeend`, Card)

//   console.log(input__search)
//   const button__search = document.getElementsByClassName("group__input")
//   console.log(button__search)
  
  document.querySelector(".button__search").addEventListener('click', function (){
      let inputValue = document.querySelector(".input__search").value.toUpperCase()
      let encontrados = resultados.filter(card => {
          return card.titulo.toUpperCase().includes(inputValue) ||
          card.ingredientes.toUpperCase().includes(inputValue)
        })
        // console.log(encontrados)
        document.querySelector(".cards").innerHTML =
        encontrados.map(encontrado => {
            return new Card(encontrado).render()
        }).join("")
        
    }
    
    )
    // let tittle = ["Ginger", "Champagne", "potato", "eggnog", "suculent", "irish"]
    // let word = tittle.includes("Ginger", "Champagne", "potato", "eggnog", "suculent", "irish")
    // console.log(tittle)
   


//     search.addEventListener("onclick", function (evento) {
//     if (resultados.filter(text => text === ginger)) {
//         $(this.resultado[0]);

//     } else if  
//         (resultados.filter(text => text === potato))
//         $(this.resultado[1]);
//         }

// )







    // button__search.addEventListener("click", function() {
    //     if (group__input() === "Ginger"){
    //         $(this.resultado[0]).show();
    //         $(this.resultado[1]).hide();
    //         $(this.resultado[2]).hide();
    //         $(this.resultado[3]).hide();
    //         $(this.resultado[4]).hide();
            
            
    //     }
    // }) 
    

