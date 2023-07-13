const btnCalcular = document.querySelector('#btnCalcular')
const answer = document.querySelector('#answer')
const raizQuadrada = document.querySelector('#raizQuadrada')

// Funções 

const calcularRaiz = () => {
    btnCalcular.addEventListener('click', () => {
        console.log('Calculei!')
        if (raizQuadrada.value == 0) {
            answer.innerHTML = `Preencha o campo corretamente`
        } else {
            const result = Math.floor(Math.sqrt(raizQuadrada.value))
            answer.innerHTML = `Raiz Quadrada: ${result}`
        }
    })
}

calcularRaiz()