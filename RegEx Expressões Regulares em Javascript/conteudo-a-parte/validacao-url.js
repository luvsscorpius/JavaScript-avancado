const url = "www.wfsd.com"

const resultado = url.match(/www\.|\.com/g)

if (resultado == null | resultado == "www." | resultado == ".com") {
    console.log("Informe uma url correta.")
} else {
    console.log(`Sua url: ${url}`)
}