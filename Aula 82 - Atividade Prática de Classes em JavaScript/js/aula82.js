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