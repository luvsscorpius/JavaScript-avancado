// let a, b, c, d

// ({ a, b, c, d } = { a: "green", b: "yellow", c: "red", d: "white" })

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let numeros = [10, 20, 30, 40]

// let [a, b, c, d] = numeros

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Valores padrões

// let a = 10;
// let b = 20;

// [a, b] = [b, a]

// console.log(a)
// console.log(b)

// let numeros = () => {
//     return [10, 20, 30, 40]
// }

// let [a, b, c, d] = numeros()

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// P2

let numeros = [20, 30, 40, 50, 60, 70, 80, 90]

let [a, b, c, ...d] = numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj = { nome: "and", canal: 'ande' }

let { nome, canal } = obj
console.log(nome)
console.log(canal)

const cores = () => {
    return ["green", 'yellow', 'white', 'black']
}

let [c1, c2, , c3] = cores()

console.log(c1)
console.log(c2)
console.log(c3)

let texto = "Curso de JavaScript"
let [t, u, i] = texto.split(" ")
console.log(t)
console.log(u)
console.log(i)

