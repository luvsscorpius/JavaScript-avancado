class login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null
    static styleCSS = null
    static config = {
        cor: '048',
        img: './logo.png'
    }
    static endPoint = "https://loginv1.luvsscorpius.repl.co/"
    //https://loginv1.luvsscorpius.repl.co/?matricula=123&senha=321


    static login = (config = null) => {
        if (config != null) {
            this.config = config
        }

        this.styleCSS =
            ".fundoLogin {display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box; }" +
            ".baseLogin {display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}" +
            ".elementosLogin {display: flex; justify-content: center; flex-direction: column; align-items: center; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
            ".logoLogin img {display: flex; justify-content: center; align-items: center; background-color: #bbb; width: 200px; padding: 10px; border-radius: 0px 10px 10px 0px; box-sizing: inherit;}" +
            ".campoLogin {display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}" +
            ".campoLogin label {font-size: 18px; }" +
            ".campoLogin input {font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px;}" +
            ".botoesLogin {display: flex; justify-content: space-evenly; align-items: center; width: 100%; box-sizing: inherit;}" +
            `.botoesLogin button {cursor: pointer;background-color:#${this.config.cor}; color: #fff; border-radius: 5px; padding: 10px; width: 100px; box-sizing: inherit;}`

        const linkStyle = document.createElement('style')
        linkStyle.setAttribute('id', 'styleLogin')
        linkStyle.setAttribute('rel', 'stylesheet')
        linkStyle.setAttribute('type', 'text/css')
        linkStyle.innerHTML = this.styleCSS
        document.head.appendChild(linkStyle)

        const corpo = document.body

        const fundoLogin = document.createElement('div')
        fundoLogin.setAttribute('id', 'fundoLogin')
        fundoLogin.setAttribute('class', 'fundoLogin')
        corpo.prepend(fundoLogin)

        const baseLogin = document.createElement('div')
        baseLogin.setAttribute('id', 'baseLogin')
        baseLogin.setAttribute('class', 'baseLogin')
        fundoLogin.appendChild(baseLogin)

        const elementosLogin = document.createElement('div')
        elementosLogin.setAttribute('id', 'elementosLogin')
        elementosLogin.setAttribute('class', 'elementosLogin')
        baseLogin.appendChild(elementosLogin)

        const campoLoginUsername = document.createElement('div')
        campoLoginUsername.setAttribute('id', 'campoLoginUsername')
        campoLoginUsername.setAttribute('class', 'campoLogin')
        elementosLogin.appendChild(campoLoginUsername)

        const labelUsername = document.createElement('label')
        labelUsername.innerHTML = "Username"
        labelUsername.setAttribute('class', 'labelUsername')
        campoLoginUsername.appendChild(labelUsername)

        const inputUsername = document.createElement('input')
        inputUsername.setAttribute('id', 'inputUsername')
        inputUsername.setAttribute('class', 'inputUsername')
        inputUsername.setAttribute('type', 'text')
        inputUsername.setAttribute('name', 'inputUsername')
        campoLoginUsername.appendChild(inputUsername)

        const campoLoginSenha = document.createElement('div')
        campoLoginSenha.setAttribute('id', 'campoLoginSenha')
        campoLoginSenha.setAttribute('class', 'campoLogin')
        elementosLogin.appendChild(campoLoginSenha)

        const labelSenha = document.createElement('label')
        labelSenha.setAttribute('class', 'labelSenha')
        labelSenha.innerHTML = "Senha"
        campoLoginSenha.appendChild(labelSenha)

        const inputSenha = document.createElement('input')
        inputSenha.setAttribute('id', 'inputSenha')
        inputSenha.setAttribute('class', 'inputSenha')
        inputSenha.setAttribute('type', 'password')
        inputSenha.setAttribute('name', 'inputSenha')
        campoLoginSenha.appendChild(inputSenha)

        const botoesLogin = document.createElement('div')
        botoesLogin.setAttribute('class', 'botoesLogin')
        elementosLogin.appendChild(botoesLogin)

        const btnLogin = document.createElement('button')
        btnLogin.setAttribute('id', 'btnLogin')
        btnLogin.innerHTML = "Login"
        btnLogin.addEventListener('click', (e) => {
            this.verificarLogin()
        })
        botoesLogin.appendChild(btnLogin)

        const btnCancelar = document.createElement('button')
        btnCancelar.setAttribute('id', 'btnCancelar')
        btnCancelar.innerHTML = "Cancelar"
        btnCancelar.addEventListener('click', (e) => {
            this.fechar()
        })
        botoesLogin.appendChild(btnCancelar)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('id', 'logoLogin')
        logoLogin.setAttribute('class', 'logoLogin')
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement('img')
        imgLogoLogin.setAttribute('src', this.config.img)
        imgLogoLogin.setAttribute('title', 'Google')
        logoLogin.appendChild(imgLogoLogin)
    }

    static fechar = () => {
        const fundoLogin = document.querySelector('#fundoLogin')
        fundoLogin.remove()
        const styleLogin = document.querySelector('#styleLogin')
        styleLogin.remove()
    }

    static verificarLogin = () => {
        const mat = document.querySelector('#inputUsername').value
        const pass = document.querySelector('#inputSenha').value

        const endPoint = `https://loginv1.luvsscorpius.repl.co/?matricula=${mat}&senha=${pass}`

        fetch(endPoint)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    this.logado = true
                    this.matlogado = mat;
                    this.nomelogado = res.nome;
                    this.acessologado = res.acesso;
                    this.fechar()
                } else {
                    this.logado = false
                    this.matlogado = null;
                    this.nomelogado = null;
                    this.acessologado = null;
                    alert("Login não efetuado! Username ou Senha inválidos.")
                }
            })

        // if (mat == "123" && pass == "321") {
        //     return true
        // } else {
        //     return false
        // }
    }
}

export { login }