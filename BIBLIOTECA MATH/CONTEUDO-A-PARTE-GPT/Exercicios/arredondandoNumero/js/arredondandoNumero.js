const btnArredondar = document.querySelector('#btnArredondar')
const arredondando = document.querySelector('#arredondando')
const answer = document.querySelector('#answer')

// Funções 

const arredondar = () => {
    btnArredondar.addEventListener('click', () => {
        console.log('Arredondei')
        const result = Math.floor(Math.random() * 101)
        answer.innerHTML = `O número gerado: ${result}`
    })
}

arredondar()