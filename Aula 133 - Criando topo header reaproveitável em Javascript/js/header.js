const head = document.head
const body = document.body

const style = "<link rel='stylesheet' href='css/header.css'>"
head.innerHTML += style

const header = document.createElement("div")
header.setAttribute('id', 'topo')
header.classList.add("topo")

// Append adiciona no final 
// Prepend adiciona no começo
body.prepend(header)

const logo =
    "<div id='logo' class='logo'/>" +
    "<img src='logo.png' title='and'/>" +
    "</div>"

header.innerHTML += logo

const login =
    "<div id='login' class='login'/>" +
    "<p id='matricula'>Matrícula:<span></span></p>" +
    "<p id='nome'>Nome:<span></span></p>" +
    "</div>"

header.innerHTML += login