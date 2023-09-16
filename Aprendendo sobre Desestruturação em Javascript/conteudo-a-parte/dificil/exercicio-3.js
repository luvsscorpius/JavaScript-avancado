// Dado o objeto abaixo, utilize a desestruturação com uma verificação condicional para extrair os valores de acordo com as condições.
const student = {
    name: 'Alex',
    age: 22,
    isGraduated: true,
};

// Seu código aqui
const { name: studentName, age: isAdult, isGraduated: canJoinAlumni } = student

if (isAdult < 21) {
    console.log(`${studentName} you cant join the Alumni because you're under 21`)
} else if (canJoinAlumni === false) {
    console.log(`${studentName} you cant join the Alumni because you're not gradueted yet`)
} else {
    console.log(studentName);     // 'Alex'
    console.log(canJoinAlumni);   // true (verifique se o estudante é formado)
    console.log(isAdult);         // true (verifique se o estudante é maior de idade)
}


