const mat = document.querySelector('#mat')

mat.innerHTML = Math.floor(Math.random() * 10)
//  Para gerar um número aleatório se utiliza o random
//  e ele vai gerar de 0 a 1, mas se voce quiser um número
//  maior é só multiplicar pelo maximo de números
//  E caso queira um número inteiro utilize o .floor