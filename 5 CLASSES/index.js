// Primeiro exemplo
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa('And', 19)
const pessoa2 = new Pessoa('Maria', 50)
pessoa1.apresentar()
pessoa2.apresentar()

//As classes em JavaScript também podem ter herança, onde uma classe pode estender outra classe para herdar suas propriedades e métodos. Isso é feito usando a palavra extends . Por exemplo

// Segundo exemplo
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade) // chama o constructor da classe pai (Pessoa)
        this.matricula = matricula
    }

    estudar() {
        console.log(`${this.nome} está estudando.`)
    }
}

const aluno1 = new Aluno('Maria', 20, '123456')
aluno1.apresentar()
aluno1.estudar()

// Terceiro exemplo
class Carro {
    constructor(nome, ano) {
        this.nome = nome
        this.ano = ano
    }

    mostrar() {
        console.log(`O carro ${this.nome} nasceu no ano de ${this.ano}`)
    }
}

const carro1 = new Carro('Ferrari', 2000)
const carro2 = new Carro('Fusca', 1970)

carro1.mostrar()
carro2.mostrar()