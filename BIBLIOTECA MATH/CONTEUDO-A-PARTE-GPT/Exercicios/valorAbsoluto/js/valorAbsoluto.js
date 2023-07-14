// Variáveis 

const valor = document.querySelector('#valor')
const btnValor = document.querySelector('#btnValor')
const answer = document.querySelector('#answer')

// Funções

const calcularValorAbsoluto = () => {
    btnValor.addEventListener('click', () => {
        console.log('Calculei')
        if (valor.value > 0) {
            answer.innerHTML = 'Apenas números negativos são permitidos.'
        } else {
            const result = Math.abs(valor.value)
            answer.innerHTML = `O valor absoluto de ${valor.value} é <strong>${result}</strong>.`
        }
    })
}

calcularValorAbsoluto()