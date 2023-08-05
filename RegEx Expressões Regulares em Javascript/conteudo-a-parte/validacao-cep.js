const regex = /12345-678/

const cep = "12345-678"
const resultado = regex.test(cep)

if (resultado) {
    console.log(`Seu CEP: ${regex}`)
} else {
    console.log("Informe um código postal válido")
}

