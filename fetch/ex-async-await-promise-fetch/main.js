
//Fazer a chamada usando fetch para pegar uma imagem
//colocando a imagem criando uma tagg img no body
//lidando con erros

// fetch ("rainbow.jpg").then(response => {
//     console.log(response)
//     return response.blob()
// }).then(blob => {
//     console.log(blob)
//     document.getElementById("rainbow").src =
//     URL.createObjectURL(blob)
// // }).catch(error => {
// //     console.log(error)
// })

// EL MISMO EJERCICIO CON ASYNC AWAIT

async function pegarArcoIris(){
    const response = await fetch("rainbow.jpg")
    const blob = await response.blob()
    console.log(response)
    console.log(blob)
    document.getElementById("rainbow").src =
    URL.createObjectURL(blob)
    
}

pegarArcoIris()