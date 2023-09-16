// Complete a função para que ela receba um objeto com informações de uma compra e utilize a desestruturação para calcular o total.
function calculateTotal(order) {
    // Seu código aqui
    const [item1, item2, item3] = order.items

    const subtotal = item1.price + item2.price + item3.price

    const total = subtotal * (1 - order.discount)

    return `O valor total da sua compra é: ${total}`
}

const orderInfo = {
    items: [
        { name: 'Widget', price: 9.99 },
        { name: 'Gadget', price: 19.99 },
        { name: 'Doohickey', price: 7.49 },
    ],
    discount: 0.1,
};

console.log(calculateTotal(orderInfo)); // Deve calcular e retornar o valor total da compra após o desconto.
