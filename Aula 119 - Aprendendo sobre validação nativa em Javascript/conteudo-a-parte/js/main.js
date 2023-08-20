const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const idade = document.querySelector('#idade')
const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', (e) => {
    e.preventDefault()

    // Testando se o campo está vazio

    let formIsValid = true;

    if (nome.validity.valueMissing) {
        nome.setCustomValidity("Insira o nome antes de prosseguir")
        formIsValid = false
    } else {
        nome.setCustomValidity("");
    }

    if (sobrenome.validity.valueMissing) {
        sobrenome.setCustomValidity("Insira o sobrenome antes de prosseguir")
        formIsValid = false
    } else {
        sobrenome.setCustomValidity("")
    }

    if (email.validity.valueMissing) {
        email.setCustomValidity("E-mail vazio, insira um e-mail antes de prosseguir")
        formIsValid = false
    } else {
        email.setCustomValidity("")
    }

    if (email.validity.typeMismatch) {
        email.setCustomValidity("Insira um e-mail válido com @ e .")
        formIsValid = false
    } else {
        email.setCustomValidity("")
    }

    if (senha.validity.valueMissing) {
        senha.setCustomValidity("Senha vazia, insira uma senha antes de prosseguir")
        formIsValid = false
    } else {
        senha.setCustomValidity("")
    }

    if (idade.validity.valueMissing) {
        idade.setCustomValidity("Idade vazia, informe uma idade antes de prosseguir")
        formIsValid = false
    } else {
        idade.setCustomValidity("")
        enviar.setAttribute('data-bs-target', '#exampleModal')
        enviar.setAttribute('data-bs-toggle', 'modal')
    }

    idade.reportValidity()
    senha.reportValidity()
    email.reportValidity()
    sobrenome.reportValidity()
    nome.reportValidity()
})