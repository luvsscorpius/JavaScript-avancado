// Dado o objeto abaixo, utilize a desestruturação para extrair os valores, renomeando as variáveis conforme instruído.
const product = {
    productName: 'Smartphone',
    price: 899.99,
};

// Seu código aqui
const { productName: name, price: cost } = product

console.log(name);  // 'Smartphone'
console.log(cost);  // 899.99
