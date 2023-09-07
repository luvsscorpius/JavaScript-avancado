class login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null
    static endPoint = "https://loginv1.luvsscorpius.repl.co/"
    //https://loginv1.luvsscorpius.repl.co/?matricula=123&senha=321


    static login = (mat, pass) => {
        this.endPoint += `?matricula=${mat}&senha=${pass}`
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