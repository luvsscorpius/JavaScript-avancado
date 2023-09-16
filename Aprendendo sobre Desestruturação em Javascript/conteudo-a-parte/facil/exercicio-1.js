// Dado o array de números, utilize a desestruturação para extrair os valores e atribuí-los a variáveis.
const numbers = [1, 2, 3, 4, 5];

// Seu código aqui
const [a, b, ...rest] = numbers

console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
