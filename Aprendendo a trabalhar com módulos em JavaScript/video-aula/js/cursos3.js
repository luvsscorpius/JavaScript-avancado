const cursos = ["JavaScript", "HTML", "CSS", "Bootstrap", "Python", "PHP", "React", "Angular"]

const getTodosCursos = () => {
    return cursos
}

const getCurso = (i_curso) => {
    return cursos[i_curso]
}

export { cursos }
export { getCurso }
// Quando eu exportar algo como padrão, quando eu for importar ele precisa ficar fora das chaves
export default getTodosCursos