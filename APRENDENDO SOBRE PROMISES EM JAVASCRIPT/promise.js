const numero = document.querySelector('#numero')

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

promise.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
}) // deu certo
promise.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("ok")
    numero.classList.add("erro")
})  // deu errado

numero.innerHTML = "Processando..."