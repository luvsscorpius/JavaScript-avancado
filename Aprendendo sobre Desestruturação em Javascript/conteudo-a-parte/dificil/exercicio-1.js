// Dado o array de arrays, utilize a desestruturação para extrair os valores necessários para cada item.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Seu código aqui
const [array1, array2, array3] = matrix
const [a, , ,] = array1
const [, b, ,] = array2
const [, , c] = array3

console.log(a); // 1
console.log(b); // 5
console.log(c); // 9
