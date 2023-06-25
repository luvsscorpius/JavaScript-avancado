// Crie uma classe chamada Counter que tenha um membro estático chamado count que representa o número total de instâncias da classe. A cada vez que uma instância de Counter for criada, o contador deve ser incrementado. Crie um trecho de código que cria 3 instâncias de Counter e, em seguida, imprima o valor atual do contador.
class counter {
    static cont = 0

    constructor() {
        counter.cont++
    }
}

const instancia1 = new counter()
const instancia2 = new counter()
const instancia3 = new counter()

console.log("O valor de cont é:", counter.cont)