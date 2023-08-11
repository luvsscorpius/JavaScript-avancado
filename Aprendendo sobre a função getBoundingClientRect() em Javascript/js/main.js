const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

const info = (e) => {
    let DOMRectQ = e.getBoundingClientRect()
    posx.innerHTML = `posx: ${DOMRectQ.x}`
    posy.innerHTML = `posy: ${DOMRectQ.y}`
    altura.innerHTML = `altura: ${DOMRectQ.height}`
    largura.innerHTML = `largura: ${DOMRectQ.width}`
}

q1.addEventListener('click', (e) => {
    info(e.target)
})

q2.addEventListener('click', (e) => {
    info(e.target)
})



