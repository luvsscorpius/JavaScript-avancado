// Crie uma classe chamada MathUtils que contenha um método estático chamado isEven que verifica se um número é par. Em seguida, escreva um trecho de código que usa esse método para verificar se os números 4, 9 e 16 são pares.

class MathUtils {
    static isEven(number) {
        // se usa a porcentagem em programação para descobrir o resto do número é zero ou não
        return number % 2 === 0 ? "Par" : "Impar"
    }
}

console.log(MathUtils.isEven(2))