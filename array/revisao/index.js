
const comidas = ["lasanha", "batata", "bacon"]
console.log(comidas[2]);

comidas.forEach((comida, posicao) => {
    console.log(`Na posicao ${posicao} temos a comida: ${comida}`)
});

//CONCAT HACE UNA COPIA DEL ARRAY Y AL MISMO TIEMPO 
//ADICIONA EL ELEMENTO DENTRO DE LA LISTA. ÉL NO MODIFICA EL ARRAY ORIGINAL

let outrasComidas = comidas.concat("pizza");
console.log("outrasComidas", outrasComidas)

//JOIN TRANSFORMA EL ARRAY EN UNA STRING Y UTILIZA EL ARGUMENTO COMO SEPARADOR

let stringDoArray = comidas.join(',')
console.log(stringDoArray)

// let stringDoArray = comidas.join('!')
// console.log(stringDoArray)

//shift ES UNA PROPIEDAD QUE QUITA EL PRIMER VALOR Y LO RETORNA POSTERIORMENTE. 
//LINEA 8 DEL CONSOLE.

console.log(comidas.shift())
console.log(comidas)

// POP ES UNA PROPIEDAD QUE QUITA EL ÚLTIMO VALOR DE LA LISTA Y LO RETORNA POSTERIORMENTE. 
// //LINEA 9 DEL CONSOLE.

console.log(comidas.pop())
console.log(comidas)

//UNSHIFT ADICIONA UN ITEM DEL ARRAY (LISTA) EN LA PRIMERA POSICIÓN DEL ARRAY Y 
//MODIFICA PERMANENTEMENTE EL ARRAY. LINEA 10 DEL CONSOLE.

comidas.unshift("macarrao")
console.log(comidas)

//PUSH ADICIONA UN ITEM DEL ARRAY (LISTA) EN LA ÚLTIM POSICIÓN DEL ARRAY Y 
//MODIFICA PERMANENTEMENTE EL ARRAY. LINEA 11 DEL CONSOLE.

comidas.push("strogonoff");
console.log(comidas)

//INVIERTE UN ARRAY (LISTA).LINEA 12 DEL CONSOLE.

comidas.reverse();
console.log(comidas)

//SLICE HACE UNA COPIA SIMPLE DELIMITANDO EL COMIENZO Y EL FINAL DE LO QUE TU DESEES 
//TENER EN EL ARRAY (LISTA) LINEA 13 DEL CONSOLE

let cortarAlimentos = comidas.slice(1,2)
console.log(cortarAlimentos)
console.log(comidas)

//SPLICE REMUEVE Y ADICIONA VALORES UTILIZANDO LA POSICIÓN, ÍNDICE DE APAGAR
//LINEA 14 CONSOLE LOG

comidas.splice(1, 0, "alface");
console.log(comidas)

//SORT == ORDENAR EN ORDEN ALFABÉTICA EL ARRAY (LISTA). LINEA 15 DEL CONSOLE LOG

comidas.sort()
console.log(comidas)

//INDEXOF ES UNA PROPIEDAD QUE TE PERMITE UBICAR LA POSICIÓN 
//DE UN ELEMENTO DENTRO DEL ARRAY (LISTA). EL LASTINDEXOF LO HACER A PARTIR DEL FINAL
//ES DECIR, DE DEERECHA A LA IZQUIERDA

comidas.push("alface")
comidas.unshift("batata")
console.log(comidas)
console.log(comidas.indexOf("batata"))
console.log(comidas.lastIndexOf("batata"))

//NO ENCUENTRA UN ITEM. PRINTA EL VALOR EN -1, ES DECIR, NO LO ENCONTRÓ EJEMPLO:
//LINEA 17 DEL CÓDIGO

console.log(comidas.indexOf("Brocolis"))

// MAP ES UNA PROPIEDAD QUE CREA UNA COPIA Y PROCESA EL VALOR GENERANDO UN NUEVO ARRAY (LISTA)

let mapArray = comidas.map((comida) =>`${comida} Gostosa`)
console.log (mapArray)

let teste = comidas.forEach((comida) => `${comida} boa`)
console.log(teste)

const numeros = [1,2,3,4,5]
let numerosDobrados = numeros.map ((numero) =>numero*2)
console.log(numerosDobrados)

let arrayProcura = comidas.filter((comida) => comida === `batata`)
console.log(arrayProcura)

//REDUCE, PROPIEDAD QUE PERMITE UNIR LOS ELEMENTOS DEL ARRAY DE IZQUIERDA A DERECHA.
//IZQUIERDA ES EL PRIMER ELEMENTO, EL RESTO DE LOS ELEMENTOS, EL REDUCE 
//LO RECONOCE COMO UBICADOS A LA DERECHA.  REDUCE ACUMULA VALORES EN VARIABLES MATEMÁTICAS
 
let juntaComida = comidas.reduce((esq, dir) => {
return `${esq} e ${dir}`
})

console.log(juntaComida)

let somaNumero = numeros.reduce((esq, dir) => {
    return esq + dir
});
console.log(somaNumero)

// somaNumero.reduce()