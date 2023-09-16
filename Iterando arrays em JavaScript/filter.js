let users = [
    { name: 'And', id: 1, active: true },
    { name: 'Vitor', id: 2, active: false },
    { name: 'Miguel', id: 3, active: false },
]

users = users.filter(user => {
    return user.active
})

console.log(users) // [ { name: 'And', id: 1, active: true } ]