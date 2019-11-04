let frutas = ["banana", "morango", "bacurí", "laranja"];


const inputType = document.getElementById("nomeFrutas");
console.log(inputType)

const buttonType = document.getElementById("buttonFin");
console.log(buttonType)


buttonType.addEventListener("click", function(evento){
    evento.preventDefault();
    if (nomeFrutas() === "text"){
        inputType.getAttribute("placeholder","A sua fruta escolhida é:");

    }   
    // } else if (etiqueta.value.trim() == ""){};    
    // else {
    //     adicioneTexto.setAttribute("placeholder","Escreva aquí uma nova tarefa");


    // }
})

 
    // buttonFin.addEventListener("click", function(evento){
    // evento.preventDefault();
    // if (inputType == "text"){
    //     console.log(text)

    //     }
    // })