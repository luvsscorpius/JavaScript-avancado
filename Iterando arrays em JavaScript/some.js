const monthlyPayment = [
    { month: "jan", payday: true },
    { month: "fev", payday: false },
    { month: "mar", payday: false },
    { month: "abr", payday: false },
    { month: "mai", payday: true },
]

let payments = monthlyPayment.some(function (month) {
    return month.payday
})

console.log(payments)

//payments == true ;)