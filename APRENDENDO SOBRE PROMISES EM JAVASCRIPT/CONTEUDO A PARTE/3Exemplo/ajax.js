function fetchData() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.example.com/data', true)

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 400) {
                const response = JSON.parse(xhr.responseText)
                resolve(response)
            } else {
                reject(xhr.statusText)
            }
        }

        xhr.onerror = () => {
            reject('Erro de conexão')
        }

        xhr.send()
    })
}

const loadDataButton = document.querySelector('#load-data')
const dataContainer = document.querySelector('#data-container')

loadDataButton.addEventListener('click', () => {
    fetchData()
        .then(data => {
            // Atualizar o conteúdo da página com os dados carregados
            dataContainer.innerHTML = JSON.stringify(data)
        })
        .catch(error => {
            dataContainer.innerHTML = 'Erro ao carregar os dados: ' + error
        })
})