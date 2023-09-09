
const configDataGridView = {
    endPoint: "./js/produtos.json",
    idDestino: "#dataGridViewDados"
}

const dataGridView = (configDataGridView) => {
    const dataGridViewDados = document.querySelector(configDataGridView.idDestino)
    dataGridViewDados.innerHTML = ""
    fetch(configDataGridView.endPoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dataGridViewLinha = document.createElement('div')
                dataGridViewLinha.classList.add('dataGridViewLinha')

                const c1 = document.createElement('div')
                c1.classList.add('c1', 'coluna')
                c1.innerHTML = el.id
                dataGridViewLinha.appendChild(c1)

                const c2 = document.createElement('div')
                c2.classList.add('c2', 'coluna')
                c2.innerHTML = el.produto
                dataGridViewLinha.appendChild(c2)

                const c3 = document.createElement('div')
                c3.classList.add('c3', 'coluna')
                c3.innerHTML = el.marca
                dataGridViewLinha.appendChild(c3)

                const c4 = document.createElement('div')
                c4.classList.add('c4', 'coluna')
                c4.innerHTML = el.modelo
                dataGridViewLinha.appendChild(c4)

                const c5 = document.createElement('div')
                c5.classList.add('c5', 'coluna')
                dataGridViewLinha.appendChild(c5)

                const imgView = document.createElement('img')
                imgView.classList.add('dataGridViewIcone')
                imgView.setAttribute("src", "./img/view.svg")
                c5.appendChild(imgView)

                const imgEdit = document.createElement('img')
                imgEdit.classList.add('dataGridViewIcone')
                imgEdit.setAttribute("src", "./img/edit.svg")
                c5.appendChild(imgEdit)

                const imgDelete = document.createElement('img')
                imgDelete.classList.add('dataGridViewIcone')
                imgDelete.setAttribute("src", "./img/trash.svg")
                c5.appendChild(imgDelete)

                dataGridViewDados.appendChild(dataGridViewLinha)

            })
            console.log(res)
        })
}

dataGridView(configDataGridView)
