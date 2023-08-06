const carro = document.querySelector('#carro')
const btnDireita = document.querySelector('#btnDireita')
const btnEsquerda = document.querySelector('#btnEsquerda')

const init = () => {
    carro.style.position = 'relative'
    carro.style.left = '0px'
}

window.addEventListener('load', init)

btnDireita.addEventListener('click', () => {
    let pos = parseInt(carro.style.left)
    pos += 10
    carro.style.left = `${pos}px`
    console.log(pos)
})

btnEsquerda.addEventListener('click', () => {
    carro.style.left = parseInt(carro.style.left) - 10 + "px"
})