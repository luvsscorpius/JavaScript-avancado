const fetchUsers = async () => {
    const endPoint = "https://jsonplaceholder.typicode.com/users"
    fetch(endPoint)
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao obter dados da API')
            }
            return res.json()
        })
        .then(ret => {
            const userListElement = document.querySelector('#user-list')
            const users = ret
            users.forEach(user => {
                const listItem = document.createElement('li')
                listItem.textContent = `Nome: ${user.name} | Email: ${user.email} | Endereço - Rua: ${user.address.street} - Cidade: ${user.address.city}`
                userListElement.appendChild(listItem)
            })
        })
        .catch(error => {
            console.log("Ocorreu um erro: ", error)
        })
}

fetchUsers()

const fetchPhotos = async () => {
    const endPoint = "https://jsonplaceholder.typicode.com/users/1/posts"
    fetch(endPoint)
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro ao obter dados da API')
            }
            return res.json()
        })
        .then(ret => {
            const userListElement = document.querySelector('#user-photo')
            const users = ret
            users.forEach(user => {
                const listItem = document.createElement('li')
                listItem.textContent = `Título: ${user.title} | thumbnailUrl: ${user.body}`
                userListElement.appendChild(listItem)
            })
        })
        .catch(error => {
            console.log("Ocorreu um erro: ", error)
        })
}

fetchPhotos()
