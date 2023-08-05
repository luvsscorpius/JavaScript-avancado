const cpf = "156.304.326-21"
const pontos = cpf.match(/[\W_]/g)
console.log(pontos)

if (cpf.length < 14 || pontos == null) {
    console.log("Informe o cpf com os pontos corretos")
} else {
    console.log("CPF salvo com sucesso")
}