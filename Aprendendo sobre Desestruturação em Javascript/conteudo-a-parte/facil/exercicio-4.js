// Dado o objeto abaixo, utilize a desestruturação para extrair os valores, fornecendo valores padrão caso não existam.
const book = {
    title: 'Aventuras Fantásticas',
    author: 'Maria Silva',
};

// Seu código aqui
const { title, author, year = 2023 } = book

console.log(title); // 'Aventuras Fantásticas'
console.log(year);  // 2023 (valor padrão)
