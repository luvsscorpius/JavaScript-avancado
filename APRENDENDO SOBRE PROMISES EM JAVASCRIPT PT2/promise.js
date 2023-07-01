// Mas e se eu quiser executar a promise em um tempo determinado?
// Colocamos ela em uma função

const numero = document.querySelector('#numero')
const btn_promise = document.querySelector('#btn_promise')

btn_promise.addEventListener('click', (evt) => {
    numero.innerHTML = "Processando..."
    promise()
        .then((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        }) // deu certo
        .catch((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove("ok")
            numero.classList.add("erro")
        })  // deu errado
})

const promise = () => {
    let promise = new Promise((resolve, reject) => {
        let resultado = true
        let tempo = 3000

        // setTimeout vai mudar a variavel resultado para true mas somente depois do tempo
        setTimeout(() => {
            if (resultado) {
                resolve("Deu tudo certo!")
            } else {
                reject("Deu tudo errado!")
            }
        }, tempo)
    })
    return promise
}

numero.innerHTML = "Esperando"

