// Variaveis
const base = document.querySelector('#base')
const potencia = document.querySelector('#potencia')
const calcularPotencia = document.querySelector('#calcularPotencia')
const answer = document.querySelector('#answer')

// Funções

const calcular = () => {
    calcularPotencia.addEventListener('click', () => {
        console.log('Consolei')
        const baseFormatada = base.value
        const potenciaFormatada = potencia.value
        if (baseFormatada == 0 && potenciaFormatada == 0) {
            answer.innerHTML = "Preencha todos os campos antes de continuar"
        } else {
            const result = Math.pow(baseFormatada, potenciaFormatada)
            answer.innerHTML = `Resultado: ${result}.`
        }
    })
}

calcular()