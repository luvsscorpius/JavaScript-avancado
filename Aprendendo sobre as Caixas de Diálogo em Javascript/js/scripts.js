const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click', (e) => {
    alert('Essa é uma caixa de alerta')
})

btn_confirm.addEventListener('click', (e) => {
    confirm("Você esta aprendendo JavaScript?")
})

btn_prompt.addEventListener('click', (e) => {
    prompt("Você esta assistindo a aula?")
})