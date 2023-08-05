const regexData = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/

const data = "18/01/2004"
const resultado = regexData.test(data)

if (resultado) {
    console.log(data)
} else {
    console.log('Informe uma data correta')
}

