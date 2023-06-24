class Npc {
    static alerta = false
    constructor(energia) {
        this.energia = energia
    }

    info = function () {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim" : "Não")}`)
        console.log("-----------------")
    }

    // Resumindo quando eu defino um membro como static eu estou dizendo que esse membro pertence a classe

    static setAlerta = function () {
        Npc.alerta = true
    }
}
const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

// Quando uso o static e a propriedade em cima do constructor e depois mudo a propriedade de Npc aqui em baixo, eu automaticamente mudo de todas sem precisar ir uma por uma.

//Npc.alerta = true

//Npc.setAlerta()

npc1.info()
npc2.info()
npc3.info()