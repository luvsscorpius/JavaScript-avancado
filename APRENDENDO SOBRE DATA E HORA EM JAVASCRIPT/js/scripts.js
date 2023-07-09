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
    console.log(`Agora são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos`)
}

const intervalo = setInterval(relogio, 1000)

//console.log(Date.now()) TimeStamp

console.log(data)
console.log(`Dia: ${data.getDate()}`) // Retorna o dia do mes
console.log(data.getTime()) // Também gera o TimeStamp
console.log(data.toDateString()) // Retorna só a data
console.log(data.toString()) // Converte para string
