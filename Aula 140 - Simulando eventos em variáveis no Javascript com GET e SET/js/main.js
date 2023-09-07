const temp = document.querySelector('#temp')
const nvl = document.querySelector('#nvl')
const pressao = document.querySelector('#pressao')

let dados = {
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val) {
        this._temperatura = val.temperatura
        this._pressao = val.pressao
        this._nivel = val.nivel
        temp.innerHTML = this._temperatura
        nvl.innerHTML = this._nivel
        pressao.innerHTML = this._pressao
    },
    get valores() {
        return [this._temperatura, this._pressao, this._nivel]
    }
}

const buscarDados = () => {
    const endPoint = "https://cfbcursos.luvsscorpius.repl.co/"

    fetch(endPoint)
        .then(res => res.json())
        .then(res => {
            dados.valores = res
        })
}

let interval = setInterval(buscarDados, 1000)

