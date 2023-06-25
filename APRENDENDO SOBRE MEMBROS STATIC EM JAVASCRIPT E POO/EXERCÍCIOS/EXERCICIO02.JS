// Crie uma classe chamada StringUtils que contenha um método estático chamado reverseString que recebe uma string como argumento e retorna a string invertida. Em seguida, escreva um trecho de código que use esse método para inverter a string "OpenAI".

class StringUtils {
    static reverseString(string) {
        // crie uma variável para guardar o metodo de reverter a string
        const stringg = [...string].reverse().join("")
        return stringg
    }
}

console.log(StringUtils.reverseString("!álO"))