//PRIMERA FORMA DE CREAR UN OBJETO EN JAVASCRIPT
//OBSERVA POR EL EJEMPLO QUE CADA OBJETO TIENE CARACTERÍSTICAS


const crianca = new Object
console.log(typeof crianca)
crianca.nome = "Marcos"
crianca.idade = 5
crianca[`brinquedo favorito`] = 'homen aranha'
console.log(crianca[`idade`])
console.log(crianca[`brinquedo favorito`])

//OTRA FORMA ES LA NOTACIÓN LITERAL CON EL USO DE CORCHETES. 
const crianca2 = {
    nome: "Paulo",
    idade: 6,
    endereco: {
        logradouro: "Rua dos bobos",
        numero: 0,
        referencia: {
            endereco: {
                logradouro: "Rua dos bobos",
                numero: 2,
                descricao: "mercado"
            }
        }
    }
}

    responsaveis: [{
        nome: "Simone",
        telefone: "1999999999",
        parentesco: "tia"
    }]

    podeBrincar: false


console.log(crianca2)
delete crianca2.idade

//USO DE FUNCTION PARA CREAR UNA CRIANCA NOVA//ESTE TIPO DE FUNCIÓN 
//ES CONSTRUCTORA. ES UN MODELO

function Crianca(nome, idade, altura){
    this.nome = nome
    this.idade = idade
    this.altura = altura 
    this.podeBrincar = () => {
        return (altura > 1)
    }
}

const c1 = new Crianca("Bete", 6, 1.1)
console.log(`${c1.nome} tem ${c1.idade} tem ${c1.altura} e ${c1.podeBrincar() ? `pode brincar`: `nao pode brincar`}`)

//ATRIBUCIÓN DE FORMA DINÁMICA

//ATRIBUCIÓN LITERAL CON LLAVES Y VALOR 

const nomeAttr = `nota`
const valorAttr = 8
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
const obj4 = {[nomeAttr] : valorAttr}
console.log(obj4)

const crianca4 = {
    nome: "Jani",
    idade: 6,
    altura: 1.2
}

console.log(Object.keys(crianca4))
console.log(Object.values(crianca4))
console.log(Object.entries(crianca4))

// crianca4.dataNascimento = `valor`
//     Object.defineProperty(crianca4, dataNascimento, {
//     enumerable: false,
//     writable: false,
//     value: `29/08/2013`
// })

// console.log(crianca4)
// crianca4.dataNascimento = `batata`
// console.log(crianca4.dataNascimento)

//CON PREVENTEXTENSIONS NO PUEDES ANADIR MÁS PROPIEDADES Y OBJETOS
//AUNQUE PUEDES CAMBIAR LOS VALORES. ESO LO PERMITE!

// const produto = Object.preventExtensions ({
//     nome: "notebook",
//     preco: 2,
//     tag: `promocao`
// })

// produto.desconto = 100
// console.log(produto)
// produto.nome = "banana"
// console.log(produto)
// console.log(Object .isExtensible(produto))
// console.log(Object .isExtensible(obj5))
// delete produto.tag
// console.log(produto) 

// Object.freeze(pessoa8)




//HERENCIA O HERANÇA

function Pessoa(nome,idade, corFavorita) {
    this.nome = nome
    this.idade = idade
    this.corFavorita = corFavorita
}

let mae = new Pessoa("Ana", 35, "vermelho")
let tio = new Pessoa("Cleber", 49, "rosa")

Pessoa.prototype.getName = function(){
    return `o nome da pessoa é: ${this.nome}`
}

console.dir(Pessoa)

console.log(mae.getName())
console.log(tio.getName())
mae.getName = function() {
    return `apresentaçao especial da mae: ${this.nome} e tenho ${this.idade}`
}
console.log(mae.getName())

// function Professor() {
//     nome: "Pedro",
//     sobrenome: "Perez",
//     materia: "Física"

// } OJO ESTO NO ES UNA FUNCTION. ESTÁ MAL ELABORADA. PARA FUNCIONAR DEBE SER UNA CONSTANTE

function Professor(nome, sobrenome, materia) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia

}
let professor1 = new Professor("Pedro", "Perez", "Física")
console.log(professor1)

Professor.prototype.dizmateria = function() {
    return `A materia é: ${this.materia}`
}

professor1.dizmateria()
console.log(professor1.dizmateria())

//USO DE HERENCIA

const avo = { attrl: 'A'}
const mae = { __proto__: 'avo', attr2: 'B', attr3: 'E'}
const filha = { __proto__: 'mae', attr3: 'C'}
console.log(filha.attrl, filha.attr2, filha.attr3)

class Avo {
    constructor(sobrenome = "Rodriguez") {
        this.sobrenome = sobrenome
    }
}

class mae Extends avo {
    constructor(sobrenome, profissao = "cineasta") {
        super(sobrenome)
        this.profissao = profissao
    }
}