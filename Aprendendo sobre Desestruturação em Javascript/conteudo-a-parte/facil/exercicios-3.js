// Complete a função para que ela receba um objeto como argumento e utilize a desestruturação para imprimir o nome e idade da pessoa.
function printNameAndAge(person) {
    console.log(`Nome: ${person.name}, Idade: ${person.age} anos`)
}

const person = {
    name: 'Pedro',
    age: 35,
};

printNameAndAge(person); // Deve imprimir "Nome: Pedro, Idade: 35"
