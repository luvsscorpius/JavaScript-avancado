const cursos = ["JavaScript", "HTML", "CSS", "Bootstrap", "Python", "PHP", "React", "Angular"]

const getTodosCursos = () => {
    return cursos
}

export { cursos }
// Quando eu exportar algo como padrão, quando eu for importar ele precisa ficar fora das chaves
export default getTodosCursos