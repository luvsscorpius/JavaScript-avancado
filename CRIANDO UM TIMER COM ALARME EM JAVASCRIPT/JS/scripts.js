const data = new Date()
const divData = document.querySelector('#divData')
const divRelogio = document.querySelector('#divRelogio')

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth() + 1
mes = mes < 10 ? "0" + mes : mes

const dataS = dia + "/" + mes + "/" + data.getFullYear()
divData.innerHTML += dataS

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora

    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    const hora_completa = hora + ":" + minutos + ":" + segundos
    divRelogio.innerHTML = hora_completa

    // Controle do alarme 
    if (alarmeAtivado && !alarmeTocando) {
        if (data.getTime() >= tsAlarme) {
            alarmeTocando = true
            somAlarme.play()
            timer.classList.add("alarme")
            horaAlarme.style.color = "#eee"
            label.style.color = "#eee"
            divData.style.color = "#eee"
        }
    }
    console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos`)
}

const intervalo = setInterval(relogio, 1000)

//console.log(Date.now()) TimeStamp

console.log(data)
console.log(`Dia: ${data.getDate()}`) // Retorna o dia do mes
console.log(data.getTime()) // Também gera o TimeStamp
console.log(data.toDateString()) // Retorna só a data
console.log(data.toString()) // Converte para string

// Criando um alarme 
const btnAtivar = document.querySelector('#btnAtivar')
const btnParar = document.querySelector('#btnParar')
const tmpAlarme = document.querySelector('#tmpAlarme')
const horaAlarme = document.querySelector('#horaAlarme')
const timer = document.querySelector('#timer')
const label = document.querySelector('#label')

// Adicionando o audio a uma constante
const somAlarme = new Audio("iPhone-13-Alarme.mp3")
somAlarme.loop = -1 // Tocar para sempre é só colocar um valor negativo

// Um time stamp basicamente representa um instante único, um ponto específico na linha do tempo, e seu valor corresponde a uma determinada quantidade de tempo decorrida a partir de uma instante inicial.

let tsAtual = null
let tsAlarme = null
let alarmeAtivado = false
let alarmeTocando = false

// Eventos

btnAtivar.addEventListener('click', () => {
    // Peguei o timeStamp do clique (atual)
    tsAtual = Date.now()
    // Definir o timeStamp do alarme, timeStamp atual + input.value que seria o valor do input vs 1000 pois o timeStamp é definido em milisegundos
    tsAlarme = tsAtual + (tmpAlarme.value * 1000)
    // Quando eu clicar a variável de alarme ativado será true
    alarmeAtivado = true
    // Data do alarme
    const dtAlarme = new Date(tsAlarme)
    horaAlarme.innerHTML = "Hora do Alarme:" + dtAlarme.getHours() + ":" + dtAlarme.getMinutes() + ":" + dtAlarme.getSeconds()
})

btnParar.addEventListener('click', () => {
    // Desativar o alarme e fazer parar de tocar
    alarmeAtivado = false
    alarmeTocando = false
    horaAlarme.innerHTML = "Hora do Alarme:"
    tmpAlarme.value = 0
    timer.classList.remove("alarme")
    somAlarme.pause() // para o som
    somAlarme.currentTime = 0 // voltei o tempo para zero para quando comecar dnv ele comece do 0.
    horaAlarme.style.color = "#000"
    label.style.color = "#000"
    divData.style.color = "#000"
})