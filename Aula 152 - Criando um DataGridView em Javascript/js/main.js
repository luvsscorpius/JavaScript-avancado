
const configDataGridView = {
    endPoint: "./js/produtos.json",
}

const dataGridView = (configDataGridView) => {
    fetch(configDataGridView.endPoint)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
}
