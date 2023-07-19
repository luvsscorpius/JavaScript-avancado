const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener("click", (e) => {
    e.preventDefault()
    console.log('Cliquei')
    //window.location = url.value
    //window.location.replace(url.value) // Deleta a url corrente do histórico
    window.location.assign(url.value) // Não deleta a url corrente do histórico
    //window.location.reload() // Recarrega a página
    // window.history.forward() // Vai para a proxíma página
    //window.history.back() // Volta para a antiga página
    // window.history.go(1)
})