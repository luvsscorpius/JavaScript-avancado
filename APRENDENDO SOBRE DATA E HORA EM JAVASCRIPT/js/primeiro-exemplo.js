// obtendo a data e a hora atual
const dataHoraAtual = new Date()

// Obtendo os componentes da data e hora
const ano = dataHoraAtual.getFullYear()
const mes = dataHoraAtual.getMonth() + 1 // Os meses são indexados a partir de 0
const dia = dataHoraAtual.getDate()
const horas = dataHoraAtual.getHours()
const minutos = dataHoraAtual.getMinutes()
const segundos = dataHoraAtual.getSeconds()

// Exibindo a data e a hora atual
console.log(`Data e hora atual: ${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`)