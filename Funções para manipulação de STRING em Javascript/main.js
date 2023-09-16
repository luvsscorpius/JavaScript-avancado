// let nome = new String("and vitor")
// let nome2 = new String("ANDERSON")
// let finalNome = new String("erson")

// console.log(nome)
// console.log(typeof (nome))

// //O primeiro caracter da variavel string eh o "a"
// console.log(nome.charAt(0))

// console.log(nome.charAt(0))

// console.log(nome.charCodeAt(0)) // Output: 97

// console.log(nome.concat(finalNome)) // Output: anderson

// console.log(nome.indexOf("a")) // Output: 0

// console.log(nome.lastIndexOf("a")) // Output: 3

// console.log(nome.localeCompare(nome2)) // Output: 0

// console.log(nome.replace('a', 'b')) // Output: bnd

// console.log(nome.search("vitor")) // Output: 4

// console.log(nome.slice(1, 4)) // output: nd

// const arrNome = nome.split(" ") // Output: ['and', 'vitor']
// console.log(arrNome)

// const parteDaString = nome.substring(0, 5) // Output: and v
// console.log(parteDaString)

// const parte2DaString = nome.substr(0, 7) // Output: and vit
// console.log(parte2DaString)

// console.log(nome.toUpperCase()) // Output: AND VITOR

// console.log(nome2.toLowerCase()) // Output: anderson

// console.log(nome.toLocaleUpperCase()) // Faz a mesma coisa que o  upperCase

// console.log(nome.valueOf()) // output: and vitor

// let num = 10
// console.log(typeof (num.toString()))

// Novos metodos

let nome = new String("and vitor")

console.log(nome.startsWith("and")) // Output: true

console.log(nome.endsWith('vitor')) // Output: true

console.log(nome.includes("a")) // Output: true

console.log(nome.repeat(2))

console.log(String.fromCodePoint(67))