// First example
const fruits = ["Apple", "Banana", "Orange"]

for (const fruit of fruits) {
    console.log(fruit)
}

//Segundo exemplo
const listaDeEstados = ["MG", "RJ", "SP", "AL"]
let estado

for (estado of listaDeEstados) {
    console.log(estado + " é um estado brasileiro.")
}

//Terceiro exemplo
const str = "Anderson Vitor"

for (let s of str) {
    console.log(s.toLocaleUpperCase())
}

