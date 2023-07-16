// Variáveis
const num_objetos = document.querySelector('#num_objetos')
const txt_qtde = document.querySelector('#txt_qtde')
const btn_add = document.querySelector('#btn_add')
const btn_remover = document.querySelector('#btn_remover')
const palco = document.querySelector('#palco')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBolas = 0

class Bola {
    constructor() {
        this.tam = Math.floor(Math.random() * 10) + 10
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        this.px = Math.floor(Math.random() * larguraPalco - this.tam)
        this.py = Math.floor(Math.random() * alturaPalco - this.tam)
    }
}

// Eventos

window.addEventListener("resize", (evt) => {
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
    console.log(larguraPalco)
})

btn_add.addEventListener("click", (evt) => {
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++) {
        // instanciar novas bolinhas
    }
})

btn_remover.addEventListener("click", (evt) => {
    bolas.map((b) => {
        // remover bolinhas

    })
})