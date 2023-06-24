class MinhaClasse {
    static membroEstatico() {
        console.log("Este é um membro estático.")
    }

    outroMembro() {
        console.log("Este é um membro de instância.")
    }
}

// Acessando o membro estático
MinhaClasse.membroEstatico()


// Criando uma instância da classe
const minhaInstancia = new MinhaClasse()

// Acessando o membro de instância
minhaInstancia.outroMembro()

// Repare que se você tentar acessar o membro de instância como o membro estático dara erro

// Segundo exemplo
class Calculadora {
    static somar(a, b) {
        return a + b
    }

    static subtrair(a, b) {
        return a - b
    }
}

// Acessando os métodos estáticos da classe Calculadora
console.log(Calculadora.somar(5, 3))
console.log(Calculadora.subtrair(10, 5))