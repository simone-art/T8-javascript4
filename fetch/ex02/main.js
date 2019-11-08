const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

//Continuar a pegar os inputs do index.html para preencher depois com o valor do api

cepInput.addEventListener("blur", () => {
    if (cepInput.value) {
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            preencherInputs(json)
            
        })
    }
}) 

preencherInputs = objeto => {
    logradouroInput.value = objeto.logradouro
    complementoInput.value = objeto.complemento
    bairroInput.value = objeto.bairro
    localidadeInput.value = objeto.localidade
    ufInput.value = objeto.uf
    
}

//PUEDES HACER ESTE MISMO EJERCICIO COLOCANDO:
//LOGRADOUROINPUT.VALUE = (JSON.LOGRADOURO) Y ASI SUCESIVAMENTE