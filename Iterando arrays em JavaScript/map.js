const monthlyPayment = [
    { name: "jan", payday: true },
    { name: "fev", payday: false },
    { name: "mar", payday: false },
    { name: "abr", payday: false },
    { name: "mai", payday: true },
]

let months = monthlyPayment.map(month => {
    return month.name
})

console.log(months)