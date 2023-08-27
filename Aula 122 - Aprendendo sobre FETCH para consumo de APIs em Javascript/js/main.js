const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_press = document.querySelector('#p_press')
const btn_texto = document.querySelector('#btn_texto')

const endPoint = "https://cfbcursos--luvsscorpius.repl.co/" // Uma variável com o endPoint

const obterDados = () => {
    fetch(endPoint)
        .then(res => res.json())
        .then(dados => {
            console.log(dados)
            p_temp.innerHTML = "Temperatura: " + dados.temperatura
            p_nivel.innerHTML = "Nível: " + dados.nivel
            p_press.innerHTML = "Pressão: " + dados.presao
        })
}

let intervalo = setInterval(obterDados, 3000)



