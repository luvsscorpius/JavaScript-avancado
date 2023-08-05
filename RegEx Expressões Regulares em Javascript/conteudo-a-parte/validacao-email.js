const email = "and@gmail.com"

const resultado = email.search(/@.*\.com/)
console.log(resultado)

if (resultado === -1) {
    console.log('Email inválido')
} else {
    console.log('Email válido')
}