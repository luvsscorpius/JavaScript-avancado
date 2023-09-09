
const configDataGridView = {
    endPoint: "./js/produtos.json",
    idDestino: "#dataGridViewDados"
}

const dataGridView = (configDataGridView) => {
    const dataGridViewDados = document.querySelector(configDataGridView.idDestino)
    fetch(configDataGridView.endPoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dataGridViewLinha = document.createElement('div')
                dataGridViewLinha.classList.add('dataGridViewLinha')

                const c1 = document.createElement('div')
                c1.classList.add('c1')
                c1.innerHTML = el.id
                dataGridViewLinha.appendChild(c1)

                const c2 = document.createElement('div')
                c2.classList.add('c2')
                c2.innerHTML = el.produto
                dataGridViewLinha.appendChild(c2)

                const c3 = document.createElement('div')
                c3.classList.add('c3')
                c3.innerHTML = el.marca
                dataGridViewLinha.appendChild(c3)

                const c4 = document.createElement('div')
                c4.classList.add('c4')
                c4.innerHTML = el.modelo
                dataGridViewLinha.appendChild(c4)

                const c5 = document.createElement('div')
                c5.classList.add('c5')
                c5.innerHTML = "D E V"
                dataGridViewLinha.appendChild(c5)

                dataGridViewDados.appendChild(dataGridViewLinha)

            })
            console.log(res)
        })
}

dataGridView(configDataGridView)
