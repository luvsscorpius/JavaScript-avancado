const carro = document.querySelector('#carro')
const btnDireita = document.querySelector('#btnDireita')
const btnEsquerda = document.querySelector('#btnEsquerda')
const btnPàrar = document.querySelector('#btnPàrar')

const init = () => {
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
}

let anima = null

window.addEventListener('load', init)

btnDireita.addEventListener('click', () => {
    // clearInterval(anima)
    // anima = setInterval(mover, 20, 1)
    clearTimeout(anima)
    mover(1)
})

btnEsquerda.addEventListener('click', () => {
    // clearInterval(anima)
    // anima = setInterval(mover, 20, -1)
    clearTimeout(anima)
    mover(-1)
})

btnPàrar.addEventListener('click', () => {
    // clearInterval(anima)
    clearTimeout(anima)
})

const mover = (dir) => {
    if (dir > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(mover, 20, dir)
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(mover, 20, dir)
        } else {
            clearTimeout(anima)
        }
    }
}

let tamMax = window.innerWidth - parseInt(carro.style.width)
window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})