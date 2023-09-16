const formulario = document.querySelector('#form')

// Precisamos criar um array para guardar a informação de cada usuário novo.
const usuarios = []

// Precisamos capturar o formulário
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.querySelector('#nome').value
    const idade = document.querySelector('#idade').value
    const profissao = document.querySelector('#profissao').value
    const email = document.querySelector('#email').value

    // Depois de capturar os dados do formulario, precisamos criar o objeto
    const usuario = {
        nome: nome,
        idade: idade,
        profissao: profissao,
        email: email
    }

    // Adicionamos o objeto ao array 
    usuarios.push(usuario)

    const objetos = document.querySelector('#objetos')

    const containerUsuario = document.createElement('div')
    containerUsuario.classList.add('containerUsuario')
    let listaUsuarios = ""
    console.log(containerUsuario)

    usuarios.forEach((usuario) => {
        listaUsuarios += usuario.nome + "<br/>" + usuario.idade + "<br/>" + usuario.profissao + "<br/>" + usuario.email + "<hr/>"

    })

    objetos.innerHTML = ""
    objetos.appendChild(containerUsuario)
    containerUsuario.innerHTML = listaUsuarios

    console.log(usuarios)
})