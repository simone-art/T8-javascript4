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