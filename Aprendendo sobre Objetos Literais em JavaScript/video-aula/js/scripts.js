const objetos = document.querySelector('#objetos')

const computador = {
    cpu: 'i9',
    ram: '16gb',
    hd: '2TB',
    info: function () {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

// Adicionar propriedade
computador['Monitor'] = '22pol'
computador.placeVideo = 'rtx'
console.log(computador['Monitor'])

// Podemos criar um array de objetos literais
const computadores = [
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '500GB',
    },
    {
        cpu: 'i7',
        ram: '32gb',
        hd: '1TB',
    },
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2TB',
    }
]

// // Podemos mostrar dessa forma
// objetos.innerHTML = computador.cpu + "-" + computador.ram + "-" + computador.hd

// // Ou utilizar o jSON
// objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach((c) => {
    console.log(c)
    const div = document.createElement('div')
    div.classList.add('computador')
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd
    objetos.appendChild(div)
})