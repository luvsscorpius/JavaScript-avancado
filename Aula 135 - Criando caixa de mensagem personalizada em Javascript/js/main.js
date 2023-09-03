const config = {
    titulo: "Caixa de mensagem (modal)",
    texto: "CFB Cursos",
    cor: "#48F"
}

const cxmsg = new Cxmsg(config)

const btn_mostrarmsg = document.querySelector('#btn_mostrarmsg')

btn_mostrarmsg.addEventListener('click', () => {
    cxmsg.mostrar()
})