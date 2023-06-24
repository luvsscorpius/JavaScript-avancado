// Objeto Literal

const pessoa = {
    nome: "and",
    canal: "CFB cursos",
    curso: "JavaScript",
    aulas: {
        aula01: "Introdução",
        aula02: "Váriaveis",
        aula03: "Condicional"
    }
}

// transformar em JSON

const s_json_pessoa = JSON.stringify(pessoa) // Converte Objeto em string JSON
console.log(pessoa)
console.log(s_json_pessoa)

// Quando se tem uma string JSON e quer converter em Objeto

const string_pessoa = '{"nome":"and","canal":"CFB cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Váriaveis","aula03":"Condicional"}}'
const o_json_pessoa = JSON.parse(string_pessoa) // Converte String JSON em objeto
console.log(o_json_pessoa)