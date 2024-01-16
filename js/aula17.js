/* Aula 13 de Javascript Aula sobre estruturas de repetição*/

let carros = [ 'Chevete', 'Fusca', 'Honda Civic' ]

/* FOR = para faca*/
/* I   = iterator, interação ou index */

for (let i = 0; i <= 5; i++) {
    document.write(i + " ")
}
for (let i = 5; i >= 1; i--) {
document.write(i + " ")
}

for (let i = 0; i < carros.length; i++){
    document.write( `<li>${carros[i]}</li>`)
}

/* FOR = para faca */
/* i = iterador, interacao ou index */

/* FOREACH forEach = para cada */
let frutas = ['Pera','Uva', 'Maça','banana','Melancia']
frutas.forEach (function(fruta, i )
{
    document.write(`${i} ${fruta} <hr>`)

})

carros.forEach(function(carro){
    document.write(`${carro}  <hr>`)
})

/* WHILE enquanto */
// criar variavel de contador fora do laço
let contador = 0 
while(contador < frutas.length)
{
    console.log(frutas[contador])
    contador++ // CONTADOR++ = contador + 1
}

// aqui o contador esta com o valor 5, onde ele parou
console.log(contador)
/* DO WHILE = a Faça enquanto ... */
// criar variável de contador fora do laço
let iterador = 0 
do{
    console.log(carros[iterador])
    iterador++ // = a contaor +  1
} 
while(iterador < carros.length)
// aqui o iterador esta com o valor 3
console.log(iterador)

