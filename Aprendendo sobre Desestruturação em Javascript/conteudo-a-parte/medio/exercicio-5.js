// Dado o objeto abaixo, utilize a desestruturação para extrair os valores, renomeando e obtendo os valores internos.
const company = {
    name: 'TechCo',
    employees: {
        person1: { firstName: 'Alice', lastName: 'Johnson' },
        person2: { firstName: 'Bob', lastName: 'Smith' },
    },
};

// Seu código aqui
const { infoName, employees } = company
const { name: companyName } = company
const { person1, person2 } = employees

const { firstName: employee1FirstName } = person1
const { lastName: employee2LastName } = person2

console.log(companyName); // 'TechCo'
console.log(employee1FirstName); // 'Alice'
console.log(employee2LastName);  // 'Smith'
