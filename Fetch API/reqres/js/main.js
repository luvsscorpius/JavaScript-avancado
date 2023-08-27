const loginForm = document.querySelector('#login-form')
const loginError = document.querySelector('#login-error')
const successfulMessage = document.querySelector('#login-successfull')

loginForm.addEventListener('submit', async event => {
    event.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const endPoint = "https://reqres.in/api/login"
    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (!res.ok) {
                loginError.textContent = 'Credenciais inválidas. Por favor, tente novamente.'
                throw new Error('Erro de login');
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            console.log('Login bem-sucedido: ', data)
            successfulMessage.textContent = 'Login bem-sucedido'
        })
        .catch(error => {
            console.error('Erro ao fazer login: ', error)
        })
})