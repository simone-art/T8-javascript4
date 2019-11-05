const users = [{
  nome: "Lydia Rodrigues",
  imagem: "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D"
},
{
  nome: "Doge",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
},
{
  nome: "Antonio Banderas",
  imagem: "https://www.antoniobanderas.me/wp-content/uploads/2015/02/banderas.jpg"
},
{
  nome: "Ricky Martin",
  imagem: "https://www.eldinamo.cl/wp-content/uploads/2019/09/PHNAHP37ZJCRLN7XJJECKV46EU-810x540.jpg"
}]

// class card {
//   constructor(nome, imagem){
//     this.nome = nome
//     this.imagem = imagem

//   }
  
//   desenhaCard() {
//     const novaCard = document.createElement("div")
//     const cardImg = document.createElement("img")
//     cardImg.src = this.imagem
//     // novaCard.setAttribute("class", `${this.nome} ${this.imagem}`)
//     console.log(cardImg)
//     novaCard.appendChild(cardImg)
//     document.getElementById('cards-section').appendChild(novaCard)
//  }
// }

// const card1 = new card ("nome", "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D")
// card1.desenhaCard()

//RESOLUCIÓN DEL EJERCICIO CON STRING 

class Avatar {
  constructor(usuario) {
    this.usuario = usuario
  }
  render() {
    const avatar = `<div class = "avatar green">
      <img class = "img-rounded" src = ${this.usuario.imagem} />
      <h2>${this.usuario.nome}</h2>
      </div>`
      document.getElementById('cards-section').insertAdjacentHTML(`beforeend`, avatar)
  }
  // mostrarInformacoes(){
  //   return `${usuario.name}`
  
}

// const primeiroAvatar = new Avatar(users[0])
// console.log(primeiroAvatar.mostrarInformacoes())

users.map((user) => {
  new Avatar(user).render()
})