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


    static login = (mat, pass, config = null) => {
        if (config != null) {
            this.config = config
        }

        this.endPoint += `?matricula=${mat}&senha=${pass}`

        this.styleCSS =
            ".fundoLogin {display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box; }" +
            ".baseLogin {display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}" +
            ".elementosLogin {display: flex; justify-content: center; flex-direction: column; align-items: center; width: 50%; background-color: #eee; padding: 10px; border-radius: 10px 0px 0px 10px; box-sizing: inherit;}" +
            ".logoLogin img {display: flex; justify-content: center; align-items: center; background-color: #bbb; width: 200px; padding: 10px border-radius: 0px 10px 10px 0px; box-sizing: inherit;}" +
            ".campoLogin {display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}" +
            ".campoLogin label {font-size: 18px; }" +
            ".campoLogin input {font-size: 18px; padding: 5px; background-color: #fff; border-radius: 5px;}" +
            ".botoesLogin {display: flex; justify-content: space-evenly; align-items: center; width: 100%; box-sizing: inherit;}" +
            `.botoesLogin button {cursor: pointer;background-color: ${this.config}; color: #fff; border-radius: 5px; padding: 10px; width: 100px; box-sizing: inherit;}`

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
        botoesLogin.appendChild(btnLogin)

        const btnCancelar = document.createElement('button')
        btnCancelar.setAttribute('id', 'btnCancelar')
        btnCancelar.innerHTML = "Cancelar"
        botoesLogin.appendChild(btnCancelar)

        const logoLogin = document.createElement('div')
        logoLogin.setAttribute('id', 'logoLogin')
        logoLogin.setAttribute('class', 'logoLogin')
        baseLogin.appendChild(logoLogin)

        const imgLogoLogin = document.createElement('img')
        imgLogoLogin.setAttribute('src', this.config.img)
        imgLogoLogin.setAttribute('title', 'google')
        logoLogin.appendChild(imgLogoLogin)


        fetch(this.endPoint)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    this.logado = true
                    this.matlogado = true;
                    this.nomelogado = res.nome;
                    this.acessologado = res.acesso;

                    console.log(res)
                } else {
                    console.log("Usuário não encontrado")
                }
            })
    }
}

export { login }