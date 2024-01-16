/* Arquivo Js aula 09 Array */

let produtos = ['Arroz', 'Feijao', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

// ADICIONAR no final: PUSH= que siginifica empurre
produtos.push('Açúcar')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07')

// REMOVER do final: pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()


// ADICIONAR no inicio: unshift
produtos.unshift('Uva', 'Maçã')

// REMOVER do inicio: shift
produtos.shift()

// REMOVER de uma posição especifica: splice
// splice = emendar 
// posicao inicial, quantos remover
codigos.splice(1, 3)

// COPITAR array slice = fatiar porção 
// posicao inicial ,  quantos copiar
let meses1 =  meses.slice()
let meses2 =  meses.slice(0,3)

// VER TAMANHO DO ARRAY: length =  comprimento/quantidade de elementos

meses.length
meses1.length
meses2.length

// spreed operator ...
// let teste = [... produtos, 'Ovo', 'Pera']


