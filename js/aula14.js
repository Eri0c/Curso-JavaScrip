/* Aula 10 Funções ou Metodos no Js*/

let titulo = document.querySelector ('h1')
titulo.textContent = 'Funções no JS'
let box =  document.querySelector('box')

/* Funções sem parametro e sem retorno (procedure) */
function olaMundo() {
    document.write('Olá Mundo sem retorno<br>')

}

/* Funções sem parametros e com retorno (function) */
function olaMundo2 () {
    return 'Olá Mundo com retorno<br>'

}
// CHAMAR A FUNÇÃO =  executar ela
olaMundo ()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

/* Funções com parametros e sem retorno (procedure) */
function somar (a,b) {
    document.write((a + b) + "<br>")
}

/* Funções com parametros e com retorno (function) */
function somar2 (c, d){
    return c + d
}

// CHAMAR A FUNÇÃO = executar ela
somar (x, y)
somar (10, 5)
document.write (`<p>${somar2(x, y)}</p>`)
document.write (`<p>${somar2(5, 2)}</p>`)

/* Função anônima = não tem nome
pode ou não ter parametros
pode ou nao ter retorno
*/

titulo.addEventListener('click', function(){
    console.log('Clicou no título')
})
/* Arrow functions ES6 2015 em diante*/

const olaMundoArrow = () => document.write("Olá Mundo!!!!!!")

// não precisa usar a palavra function
// nao precisa usar a palavra return
// nao se usa o nome função
// nao precisa colocar { } se for só uma instrução

const olaMundo2Arrow = () => '<p> Olá mundo com arrow function</p>'

olaMundoArrow()
document.write(olaMundo2Arrow())
