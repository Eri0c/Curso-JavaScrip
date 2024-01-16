/* Arquivo JS Aula 12 DOM */

// DOM = Document Object Model
// Arvore com elementos desde Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteúdos.
/*
navigator 
window
location
document -> html -> head e body
history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, e seus dados, trazer informações, etc.

// .querySelector ()
// propriedade ou atributo textContent
// serve para accessar ou alterar conteúdo
// de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)

titulo.textContent = 'DOM'
// console.log(titulo.textContent)

// .querySelectorAll()
// selecionar todos os elementos com base na tag, #id ou .class
let testando = document.querySelectorAll('.box')
//console.log (testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
//testando[0].textContent = 'texto qualquer'

// Existem também os métodos 
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementsByTagName()
.getElementById()
.getElementsByClassName()
*/
let testTag = document.getElementsByTagName('div')
//console.log(testeTag)
//document.write(testeTag[0].textContent)
document.write(testeTag[1].textContent)

let testId = document.getElementById('titulo')
//console.log(testeID)
let testeClass = document.getElementsByClassName('box')
//console.log(testeClass)
//document.write(testeClass[0].textContent)
//document.write(testeClass[1].textContent)