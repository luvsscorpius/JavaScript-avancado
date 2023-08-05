const senha = "Anderson18*"

const minCaracteres = senha.match(/./gi)
const letraMaiuscula = senha.match(/[A - Z]/g)
const letraMinuscula = senha.match(/[a-z]/g)
const numero = senha.match(/\d/g)
const especiais = senha.match(/[\W_]/g)

if (minCaracteres.length < 8) {
    console.log("Informe uma senha com no mínimo 8 caracteres")
} else if (letraMaiuscula == null) {
    console.log("Informe uma senha com no mínimo uma letra maiúscula")
} else if (letraMinuscula == null) {
    console.log("Informe uma senha com no mínimo uma letra minúscula")
} else if (numero == null) {
    console.log("Informe uma senha com no mínimo um número")
} else if (especiais == null) {
    console.log("Informe uma senha com no mínimo um caractere especial.")
} else {
    console.log("Senha criada com sucesso")
}