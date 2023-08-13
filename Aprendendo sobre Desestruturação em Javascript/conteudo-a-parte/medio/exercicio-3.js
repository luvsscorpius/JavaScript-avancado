// Dado o array de frutas, utilize a desestruturação para extrair os valores e fornecer valores padrão caso não existam.
const fruits = ['apple', 'banana'];

// Seu código aqui

const [fruit1, fruit2, fruit3 = 'orange'] = fruits

console.log(fruit1); // 'apple'
console.log(fruit2); // 'banana'
console.log(fruit3); // 'orange' (valor padrão)
