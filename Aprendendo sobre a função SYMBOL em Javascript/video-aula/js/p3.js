const nome = Symbol("nome")
const numero = Symbol("nome")
const cor_uniforme = Symbol("nome")

const Jogador = {
    [nome]: "j1",
    numero: 10,
    cor_uniforme: "amarelo"
}

for (p in Jogador) {
    console.log(p)
}

console.log(Jogador[nome])