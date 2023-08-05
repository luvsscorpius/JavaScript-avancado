let nome = new String("anderson Vitor feliciano da silva 2004")
let email = "and@gmail.com"
console.log(nome)

console.log(nome.search(/Vitor/i)) // Utilizando o / /i faz com que ele não utilize o case sensitive

console.log(nome.match(/a/ig)) // O g utiliza o global assim retornando todos os caracteres que tem a 

console.log(nome.replace(/a/ig, "teste"))

console.log(nome.match(/[io]/ig)) // Agora ele retorna o i e o

console.log(nome.match(/[a-e|0-4]/ig)) // Retornou tudo de a até e, e também de 0 até 3.

// Metacaracteres
console.log(nome.match(/\d/ig)) // Retorna somente os digitos números.
console.log(nome.match(/\s/ig)) // Retorna os espaços
console.log(nome.match(/\bA/ig)) // retorna os caracteres 

// Quantificadores

console.log(nome.match(/o+|n+/ig)) // Conta por string
console.log(nome.match(/no*/ig)) // Conta por string ou no ou o n


