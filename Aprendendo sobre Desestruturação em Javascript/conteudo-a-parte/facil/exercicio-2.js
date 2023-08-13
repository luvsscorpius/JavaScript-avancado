// Dado o objeto person, utilize a desestruturação para extrair os valores e atribuí-los a variáveis.
const person = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
};

// Seu código aqui
const { firstName, lastName, age } = person

console.log(firstName); // 'Alice'
console.log(lastName);  // 'Johnson'
console.log(age);       // 28
