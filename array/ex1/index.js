let frutas = ["banana", "morango", "bacurí", "laranja"];


let inputType = document.getElementById("nomeFrutas");
console.log(inputType)

let buttonType = document.getElementById("buttonFin");
console.log(buttonType)


// buttonFin.addEventListener("click", function(){
//     let arrAchou = frutas.filter(fruta => fruta === inputType.value)
//     console.log(arrAchou)
//     if (arrAchou.length > 0) {
//         alert(`ACHOU 0 ${inputType.value}`)

//     }else{
//         alert(`NAO ACHOU 0 ${inputType.value}`)

//     }
// });

if(frutas.find (fruta => fruta === inputType.value)){
    alert(`ACHOU 0 ${inputType.value}`)
}else{
    alert(`NAO ACHOU 0 ${inputType.value}`)

}
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase())


btn.addEventListener('click', function(){
    // let arrAchou = frutas.filter(fruta => fruta === input.value)
    // console.log(arrAchou)
    // if(arrAchou.length > 0){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }

    // if(frutas.find(fruta => fruta === input.value)){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }
    console.log(typeof input.value)
console.log(frutasMaiusculas)

    if( frutasMaiusculas.indexOf(input.value.toUpperCase()) > -1){
            alert(`ACHOU O ${input.value}`)
        }else{
            alert(`Não achou o ${input.value}`)
        }
})
