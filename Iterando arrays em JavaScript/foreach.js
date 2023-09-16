const users = [
    { name: "clóvis", id: 1, active: true },
    { name: "silva", id: 2, active: false },
    { name: "neto", id: 3, active: true },
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name)
}

// Olha que diferença
users.forEach(user => {
    console.log(user.name)
})