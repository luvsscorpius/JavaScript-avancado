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

// let intervalo = setInterval(obterDados, 3000)

let dados = {
    nome: "Bruno",
    canal: "CBFCursos",
    cursos: "JavaScript"
}

let cabecalho = {
    method: "POST", // Método HTTP da requisição como POST. Isso significa que voce está enviando dados para o servidor
    body: JSON.stringify(dados) // O corpo da requisição é definido como o objeto dados convertido para JSON
}

const gravarDados = () => {
    const endPoint = "https://cfbcursos--luvsscorpius.repl.co/"
    fetch(endPoint, cabecalho)
        .then(res => res.json()) // Transformando a resposta em JSON
        .then(ret => {
            console.log(ret) // Mostra o retorno dos dados retornados pela promise
        })
}

btn_texto.addEventListener('click', () => {
    gravarDados()
})



