const nomesNoRole = ['Adriana',
    'Adrielly',
    'Aline',
    'Ana',
    'Angelica',
    'Ba',
    'Babs',
    'Carolzinha',
    'Carolzona',
    'Cecilia',
    'Daiana',
    'Emanuelle',
    'Jackeline',
    'Jennifer',
    'Josiane',
    'Lia',
    'Marcela',
    'Monique',
    'Priscilla Roiz Garcia',
    'Priscilla Soares Alves',
    'Raissa',
    'Raquel',
    'Romênia',
    'Rosana',
    'Simara',
    'Simone',
    'Talita',
    'Telma',
    'Thaís',
    'Valdeniza']

const validacion = (nome) => {
    if (nome.trim() === "") throw 'O campo está vazio'
}

const checaPresenca = nome => {
    let estaNaLista = nomesNoRole.find((presente) => {
        return nome.toLowerCase() === presente.toLowerCase()
    })
    if (estaNaLista) {
        console.log('To na lista')
        return `${nome} estava no role`
    }
    throw `${nome} nao estava no role`
}





// console.log(inputType)

let buttonType = document.getElementById("btn");
// console.log(buttonType)


buttonType.addEventListener("click", function (event) {
    event.preventDefault()

    let inputType = document.getElementById("input").value;
    try {
        validacion(inputType)
        checaPresenca(inputType)
    } catch (erro) {
        document.getElementById("status").innerHTML = erro
        document.getElementById("status").innerHTML = erro


    }

})
//     if(nomesNoRole.find (nome => nome.toLowerCase() === inputType.value.toLowerCase())){
//     alert(`voce está no role. Bemvinda! ${inputType.value}`)
// }else{
// alert(`voce nao está no role. Sai da aquí! ${inputType.value}`)

// }
// })

// async function requestHandler(req,res){
//     try {
//     let inputType = await inputType.findById(req.inputId);
//     let buttonType = await buttonType.findById(btnId);
// console.log(buttonType)

//     }
// }