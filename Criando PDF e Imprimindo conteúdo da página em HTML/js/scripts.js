const btn_imp = document.querySelector('#btn_imp')

btn_imp.addEventListener('click', (e) => {

    // Pegando o conteúdo do id tabela
    const conteudo = document.querySelector('#tabela').innerHTML

    // Fazer o estilo encorporado 
    let estilo = "<style>"
    estilo += "table {width: 100%; font: 25px Calibri;}"
    estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;}"
    estilo += "padding: 4px 8px; text-align: center;"
    estilo += "</style>"

    // Criando uma nova janela
    const win = window.open('', '', 'height=700, width=700')

    // Criando uma página HTML
    win.document.write('<html><head>')
    win.document.write('<title>And</title>')
    win.document.write(estilo)
    win.document.write('</head>')
    win.document.write('<body>')
    win.document.write(conteudo)
    win.document.write('</body></html>')


    let doc = new jsPDF()
    doc.fromHTML(conteudo)
    doc.save('Relatório.pdf')
    //win.print()
})