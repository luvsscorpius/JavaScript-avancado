const input = "ttsayryeio##uyy***us#"
const resultado = input.includes("#")
const resultado1 = input.match(/#/g)

console.log(resultado1)

if (resultado) {
    console.log(`Quantidade de hashtags: ${resultado1}`)
} else {
    console.log("Não ha # na sua string")
}