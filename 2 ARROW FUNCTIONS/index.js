// Expressão de função

//const minhaF = function () {
//   console.log('Alguma coisa')
//}

// Declaração de função

//function minhaF() {
//  console.log('Alguma coisa')
//}

// Função tradicional 

const objetoTradicional = {
    nome: 'Objeto Tradicional',
    metodo: function () {
        console.log('Nome:', this.nome)
    }
}

objetoTradicional.metodo()

const objetoArrow = {
    nome: 'Objeto Arrow',
    metodo: () => {
        console.log('Nome:', this.nome)
    }
}

objetoArrow.metodo()