//setTimeout
const saudacao = () => {
    console.log("Olá, mundo!")
}

setTimeout(saudacao, 5000)
clearTimeout(saudacao, 10000)

//setInterval

const mostrarHora = () => {
    const data = new Date()
    console.log(`Hora atual: ${data.toLocaleTimeString()}`)
}

setInterval(mostrarHora, 1000)
clearInterval(mostrarHora, 100000)