const data = new Date()
const divData = document.querySelector('#divData')

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const dataS = dia + "/" + mes + "/" + data.getFullYear()
divData.innerHTML += dataS

//console.log(Date.now()) TimeStamp

console.log(data)
console.log(`Dia: ${data.getDate()}`) // Retorna o dia do mes
console.log(data.getTime()) // Também gera o TimeStamp
console.log(data.toDateString()) // Retorna só a data
console.log(data.toString()) // Converte para string
