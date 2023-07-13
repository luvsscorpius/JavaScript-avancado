const btnArredondar = document.querySelector('#btnArredondar')
const arredondando = document.querySelector('#arredondando')
const answer = document.querySelector('#answer')

// Funções 

const arredondar = () => {
    btnArredondar.addEventListener('click', () => {
        console.log('Arredondei')
        if (arredondando.value == 0) {
            answer.innerHTML = "Preencha o campo corretamente antes de continuar"
        } else {
            const result = Math.floor(arredondando.value)
            answer.innerHTML = `O número inteiro: ${result}`
        }
    })
}

arredondar()