const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const btn_validar = document.querySelector('#btn_validar')
const f_msg = document.querySelector('#f_msg')

btn_validar.addEventListener('click', (e) => {
    e.preventDefault()
    let status = f_nota.validity

    if (status.valueMissing) {
        f_nota.setCustomValidity("Poxa, este campo é obrigatório") // setCustomValidity customiza o texto da validação
    } else if (status.rangeOverflow) {
        f_nota.setCustomValidity("Nossa, que nota alta você digitou")
    } else if (status.rangeUnderflow) {
        f_nota.setCustomValidity("Nossa, que nota baixa você digitou")
    }

    f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage
})