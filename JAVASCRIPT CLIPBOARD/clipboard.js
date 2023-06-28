const copy = document.querySelector('#copy')


function Copiar() {
    const text = document.querySelector('#text')

    // select the text field
    text.select()
    text.setSelectionRange(0, 99999) // Para mobiles

    // Copiar texto dentro do navegador 
    navigator.clipboard.writeText(text.value)

    // Alertar que o texto foi copiado
    alert("Texto copiado: " + text.value)
}

copy.addEventListener('click', Copiar)