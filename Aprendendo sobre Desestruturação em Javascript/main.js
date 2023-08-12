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

let numeros = () => {
    return [10, 20, 30, 40]
}

let [a, b, c, d] = numeros()

console.log(a)
console.log(b)
console.log(c)
console.log(d)