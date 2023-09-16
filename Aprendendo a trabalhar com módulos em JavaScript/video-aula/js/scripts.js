// Importe cursos de cursos
// import { cursos } from "./cursos.js";
// import { carros } from "./cursos.js";

// console.log('Rodando')
// console.log(cursos)
// console.log(carros)

// Pt2
// Exportação getTodosCursos fora da chave pois é padrão
// import getTodosCursos, { cursos as c, cursos } from "./cursos2.js";
// import { getCurso as gc } from "./cursos3.js";

// Módulos renomeados
import getTodosCursos from "./cursos3.js"
// Importando tudo e dando um nome a importação
import * as m_cursos from "./cursos3.js"

// // o nome da importação . te mostra todas as opções que estão disponíveis
// console.log(m_cursos.cursos)
// console.log(m_cursos.getCurso(1))
// console.log(m_cursos.default())

// P4

import c from "./cursos4.js"

// Chamando os métodos das classes
c.addCurso("Vue")
c.apagarCursos()
console.log(c.getTodosCursos())