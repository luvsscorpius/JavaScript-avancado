// Dado o objeto nestedObj, utilize a desestruturação para extrair os valores dos objetos internos.
const nestedObj = {
    outer: {
        inner1: 'Hello',
        inner2: 'World',
    },
};

// Seu código aqui

const { outer } = nestedObj

const { inner1: greeting1, inner2: greeting2 } = outer

console.log(greeting1); // 'Hello'
console.log(greeting2); // 'World'
