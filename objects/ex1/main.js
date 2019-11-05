// HACIENDO UN COMPONENTE DE UN BOTÓN PARA REUTILIZARLO

class Botao {
    constructor(texto, cor, tamanho, icone){
        this.texto = texto
        this.cor = cor
        this.tamanho =  tamanho
        this.icone = icone
    }
    desenhaBotao(){
        const novoBotao = document.createElement('button')
        novoBotao.setAttribute("class", `${this.cor} ${this.tamanho}`)
        if (this.icone) {
            //<i></i>
            const tagIcone= document.createElement("i")
            tagIcone.setAttribute("class", `${this.icone}`)
            novoBotao.appendChild(tagIcone)            
            const text = document.createTextNode(this.texto)
            novoBotao.appendChild(text)
        } else {
            novoBotao.innerHTML=this.texto
        }
        document.getElementById('buttons-section').appendChild(novoBotao)
    }
}

const botaoVerde = new Botao ("enviar", "verde", "pequeno", "fas fa-plus")
botaoVerde.desenhaBotao()

const botaoRoxo = new Botao ("botao Novo", "roxo", "grande","fas fa-infinity")
botaoRoxo.desenhaBotao()

const botaoAzul = new Botao ("botao novo", "azul", "medio","fab fa-amazon-pay")
botaoAzul.desenhaBotao()





