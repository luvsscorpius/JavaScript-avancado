const carro = document.querySelector('#carro')
const btnRodar = document.querySelector('#btnRodar')
const btnPàrar = document.querySelector('#btnPàrar')

const init = () => {
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    carro.style.height = '40px'
    tamMax = window.innerWidth - tamCarro
}

let anima = null

window.addEventListener('load', init)

btnRodar.addEventListener('click', () => {
    mover()
})

btnPàrar.addEventListener('click', () => {
    // clearInterval(anima)
    clearTimeout(anima)
})

const mover = () => {
    if (parseInt(carro.style.left) >= tamMax) {
        dir = -1
    } else if (parseInt(carro.style.left) <= 0) {
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
    anima = setTimeout(mover, 20)
}

let tamMax = window.innerWidth - parseInt(carro.style.width)
window.addEventListener('resize', () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

let tamCarro = null
let dir = 0