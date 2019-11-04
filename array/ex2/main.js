const nomesNoRole =['Adriana',
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

let inputType = document.getElementById("input");
console.log(inputType)

let buttonType = document.getElementById("btn");
console.log(buttonType)

buttonType.addEventListener("click", function(){
        if(nomesNoRole.find (nome => nome.toLowerCase() === inputType.value.toLowerCase())){
        alert(`voce está no role. Bemvinda! ${inputType.value}`)
    }else{
    alert(`voce nao está no role. Sai da aquí! ${inputType.value}`)

    }
})