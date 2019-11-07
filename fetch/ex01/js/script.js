
//FAZER O FETCH PARA VER SE CARREGAMOS O ARRAY DE CARTAS

const cardsSection = document.getElementById("cards-section")
const loading = document.getElementById("spinner")
const placeholderCard = {
    nome: "carta nao carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descriçao",
    Imagem: "http://via.placeholder.com/250X250",
    link: "https://www.astrolink.com.br"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardsSection.innerHTML = novaCarta
}

 

// //FAZER UMA FUNÇAO PARA TIRAR CARTA ALEATORIA

selecionaCartaAleatoria = cartas => {
    
    let numeroAleatorio = Math.floor(Math.random() * cartas.length)
    return cartas[numeroAleatorio]

}

//Transforma nosso fetch num async await
// fetch("./tarot.json").then(response => {
//     return response.json ()
    
// }).then(json => {
//     console.log(json)
//     renderizaCarta(selecionaCartaAleatoria(json))
// })

async function carregaCartas(){
    try{
        const response = await fetch("tarot.json")
        const json = await response.json()
        console.log(response)
        console.log(json)
        if (!response.ok) throw `com o status:$
        {response.status}`
        renderizaCarta(selecionaCartaAleatoria(json))
        loading.style.display ="none"

    }catch(e){
    renderizaCarta(placeholderCard)
    errorSection.innerHTML = `A requisiçao falhou: ${e}`
    }
   
}
carregaCartas()

novaCarta = () => {
carregaCartas()
}



// button.addEventListener("click", function {
//     if (novaCarta) === cartas()
// })







