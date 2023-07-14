// Criando o array 

const Notas = [10, 13, 25, 18]

// Calculando
const media = Notas.reduce((a, b) => a + b, 0) / Notas.length
console.log(`A média total de notas durante o ano foi ${media}`)