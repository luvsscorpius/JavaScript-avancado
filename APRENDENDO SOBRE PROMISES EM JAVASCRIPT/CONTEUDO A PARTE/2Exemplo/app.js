function carregarCSS(url) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = url

        link.onload = () => resolve()
        link.onerror = () => reject()

        document.head.append(link)
    })
}

const loadCSSButton = document.querySelector('.load-css')
loadCSSButton.addEventListener('click', () => {
    carregarCSS('style.css')
        .then(() => {
            console.log('CSS carregado com sucesso!')
        })
        .catch(() => {
            console.error('Erro ao carregar o CSS')
        })
})