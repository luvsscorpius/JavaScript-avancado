// Dado o objeto com arrays, utilize a desestruturação para extrair valores específicos.
const data = {
    categories: ['A', 'B', 'C'],
    values: [10, 20, 30],
};

// Seu código aqui
const { categories, values } = data
const [categoryA, , ,] = categories
const [, valueB,] = values

console.log(categoryA); // 'A'
console.log(valueB);    // 20
