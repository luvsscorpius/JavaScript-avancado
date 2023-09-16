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

            const span = document.createElement('span')
            span.classList.add('fa-regular', 'fa-trash-can')
            span.setAttribute('id', 'lixeira')
            span.style.cursor = 'pointer'

            div.appendChild(span)

            span.addEventListener('click', () => {
                
                const contatoEspecifico = contatos.indexOf(contato)

                if (contatoEspecifico !== -1) {
                    contatos.splice(contatoEspecifico, 1); // Remover o contato pelo índice encontrado
                }

                console.log(contatos)

                destinoDOM.removeChild(div)
            })
        })
    }

    static excluirContato() {

    }
}


export default Contato