
const configDataGridView = {
    endPoint: "http://127.0.0.1:1880/produtos",
    idDestino: "#dataGridViewDados"
}

const dataGridView = (configDataGridView) => {
    const dataGridViewDados = document.querySelector(configDataGridView.idDestino)
    dataGridViewDados.innerHTML = ""
    fetch(configDataGridView.endPoint)
        .then(res => res.json())
        .then(res => {
            console.log(res)
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
                imgView.addEventListener('click', (e) => {
                    document.querySelector('.janelaView').classList.remove('ocultar')
                    const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                    const endPoint = `http://127.0.0.1:1880/produto/${id}`;

                    fetch(endPoint)
                        .then(res => res.json())
                        .then(res => {
                            document.querySelector('.id').value = res[0].id
                            document.querySelector('.produto').value = res[0].produto
                            document.querySelector('.marca').value = res[0].marca
                            document.querySelector('.modelo').value = res[0].modelo
                        })
                })
                c5.appendChild(imgView)

                const imgEdit = document.createElement('img')
                imgEdit.classList.add('dataGridViewIcone')
                imgEdit.setAttribute("src", "./img/edit.svg")
                imgEdit.addEventListener('click', (e) => {
                    document.querySelector('#janelaEditar').classList.remove('ocultar')
                    const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                    const endPoint = `http://127.0.0.1:1880/produto/${id}`;

                    fetch(endPoint)
                        .then(res => res.json())
                        .then(res => {
                            document.querySelector("#idEditar").value = res[0].id;
                            document.querySelector("#produtoEditar").value = res[0].produto;
                            document.querySelector("#marcaEditar").value = res[0].marca;
                            document.querySelector("#modeloEditar").value = res[0].modelo;
                        })
                })
                c5.appendChild(imgEdit)

                const imgDelete = document.createElement('img')
                imgDelete.classList.add('dataGridViewIcone')
                imgDelete.setAttribute("src", "./img/trash.svg")
                imgDelete.addEventListener("click", (evt) => {
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                    const linha = evt.target.parentNode.parentNode;
                    const endpoint = `http://127.0.0.1:1880/removeprodutos/${id}`;
                    fetch(endpoint)
                        .then(res => {
                            if (res.status == 200) {
                                linha.remove();
                            } else {
                                console.log(res)
                            }
                        })
                })
                c5.appendChild(imgDelete)

                dataGridViewDados.appendChild(dataGridViewLinha)

            })
        })
}

dataGridView(configDataGridView)
document.querySelector('.btn').addEventListener('click', (e) => {
    document.querySelector('.janelaView').classList.add('ocultar')
})

const btnAtualizar = document.querySelector('#btnAtualizar')

btnAtualizar.addEventListener('click', (e) => {
    const id = document.querySelector("#idEditar").value;
    const produto = document.querySelector("#produtoEditar").value;
    const marca = document.querySelector("#marcaEditar").value;
    const modelo = document.querySelector("#modeloEditar").value;
    const endPoint = `http://127.0.0.1:1880/updateprodutos/${id}/${produto}/${marca}/${modelo}`;

    fetch(endPoint)
        .then(res => {
            if (res.status == 200) {
                document.querySelector('#janelaEditar').classList.add('ocultar')
                dataGridView(configDataGridView)
                console.log("teste")
            } else {
                alert("Erro ao atualizar")
                console.log(res)
            }
        })
})

const btnFechar = document.querySelector('#btnFechar')

btnFechar.addEventListener('click', (e) => {
    document.querySelector('#janelaEditar').classList.add('ocultar')
})

