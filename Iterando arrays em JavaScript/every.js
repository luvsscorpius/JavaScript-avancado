const monthlyPayment = [
    { month: 'Jan', payday: false },
    { month: 'Fev', payday: false },
    { month: 'Mar', payday: false },
    { month: 'Abr', payday: false },
    { month: 'Mai', payday: false },
    { month: 'Jun', payday: false },
]

let payments = monthlyPayment.every(month => {
    return month.payday == false
})

console.log(payments) //true