const long = document.querySelector('#long')
const lati = document.querySelector('#lati')

const mostrarLocalizacao = (pos) => {
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latitude
}

const erroLocalizacao = () => {
    console.log('Erro ao obter a localização')
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log('Geolocalização não suportada')
}

