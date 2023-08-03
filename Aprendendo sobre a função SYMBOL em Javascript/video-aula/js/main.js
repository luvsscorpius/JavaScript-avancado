const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("and")
const s4 = Symbol.for("anderson")

console.log(s3 === s4)
console.log(typeof (s1))
console.log(s3)
console.log(Symbol.keyFor(s3)) // keyFor retorna a chave do symbol
console.log(Symbol.keyFor(s4)) // keyFor retorna a chave do symbol