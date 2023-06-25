//Crie uma classe chamada Config que tenha um membro estático chamado defaultConfig que representa um objeto com configurações padrão. A classe também deve ter um método estático chamado getConfig que retorna o objeto defaultConfig. Em seguida, escreva um trecho de código que altere uma propriedade do objeto defaultConfig e, em seguida, imprima o objeto retornado pelo método getConfig para verificar se a alteração foi refletida.

class config {
    static defaultConfig = {
        nome: "Configurações",
        sistema: "Windows",
        versao: 11
    }

    static getConfig() {
        return config.defaultConfig
    }
}

config.defaultConfig.sistema = "Ubuntu"
config.defaultConfig.versao = 44

console.log(config.getConfig())