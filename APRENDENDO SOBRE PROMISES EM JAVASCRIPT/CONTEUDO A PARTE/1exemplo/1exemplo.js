const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = false
        if (sucesso) {
            resolve("Operação concluída com sucesso!")
        } else {
            reject("Erro: algo deu errado.")
        }
    }, 2000) // atraso de 2 segundos
})

minhaPromise
    .then(resultado => {
        console.log(resultado)
    })
    .catch(erro => {
        console.log(erro)
    })
