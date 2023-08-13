// Dado o array de objetos, utilize a desestruturação para extrair os valores necessários para cada item do array.
const people = [
    { name: 'Maria', age: 28 },
    { name: 'João', age: 32 },
    { name: 'Ana', age: 25 },
];

// Seu código aqui

const [person1, person2, person3] = people

const { name: person1Name, age: person1Age } = person1
const { name: person2Name, age: person2Age } = person2
const { name: person3Name, age: person3Age } = person3

console.log(person1Name); // 'Maria'
console.log(person1Age);  // 28

console.log(person2Name); // 'João'
console.log(person2Age);  // 32

console.log(person3Name); // 'Ana'
console.log(person3Age);  // 25
