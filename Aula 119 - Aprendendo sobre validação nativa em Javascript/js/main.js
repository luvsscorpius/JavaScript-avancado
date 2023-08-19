const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const btn_validar = document.querySelector('#btn_validar')
const f_msg = document.querySelector('#f_msg')

btn_validar.addEventListener('click', (e) => {
    e.preventDefault()
    let msg = null

    if (!f_nota.checkValidity()) {
        msg = f_nota.validationMessage
    }

    f_msg.innerHTML = msg
})