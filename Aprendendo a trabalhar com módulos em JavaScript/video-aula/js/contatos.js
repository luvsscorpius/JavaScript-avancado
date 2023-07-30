// Precisamos fazer a importação do nosso data-base

import { contatos } from "./bancoContatos.js";

class Contato {
    constructor() {
        this.contatos = {}
    }

    static getTodosContatos() {
        return contatos
    }

    static getContato(contato) {
        return contatos[contato]
    }

    static addContato(novoContato, destinoDOM) {
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }

        contatos.push(cont)

        // Sempre que adicionar um novo contato eu limpo a div para que não duplique
        destinoDOM.innerHTML = ""

        contatos.forEach((contato) => {

            const div = document.createElement('div')
            div.classList.add('contato')

            const pNome = document.createElement('p')
            pNome.innerHTML = contato.nome

            const pTelefone = document.createElement('p')
            pTelefone.innerHTML = contato.telefone

            const pEmail = document.createElement('p')
            pEmail.innerHTML = contato.email

            div.innerHTML = ""

            div.appendChild(pNome)
            div.appendChild(pTelefone)
            div.appendChild(pEmail)

            destinoDOM.appendChild(div)
        })
    }
}

export default Contato