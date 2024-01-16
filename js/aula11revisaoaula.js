// comentario em linha

/* Comentario em bloco
*/

// criar variaveis let ou var
let produtos = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`Preco Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} <hr>`)

//criar contante
const nome = 'Edson Maia'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)
 
document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write("Nota Final" + notaFinal+ '<br>')

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto

document.write(compraComDesconto.toLocaleString('pr-BR', { style: 'currency', currency: 'BRL'})+ '<br>')

document.write(compracomDesconto = '<br>')
