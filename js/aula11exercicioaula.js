

//INFORMAÇÕES LUTADOR
let lutador ={
    nome: 'Fedor Vladimirovich Emelianenko',
    nacionalidade: 'Russo',
    idade: 44,
    peso : 106,
    altura: 1.83
}

document.write(`Lutador: ${lutador.nome} <br/>`)
document.write(`Nacionalidade: ${lutador.nacionalidade} `)
document.write(`<br/>Idade: ${lutador.idade}` + ' anos <br/>')
document.write(`Peso: ${lutador.peso}`+' Kg </br>')
document.write(`Altura: ${lutador.altura}` +  'm')




// FRASE DO DIA
document.write(`<h2>  Frase do Dia</h2>`)

const data = {
    dia : ['10/'],
    mes : ['9/'],
    ano : ['2021']
}
document.write(`${data.dia}`)
document.write(`${data.mes}`)
document.write(`${data.ano}`+'</br>')

const frasedodia = {
    frase:[
    
        'Seja curioso. Leia de tudo. Tente Coisas Novas. O que as pessoas chamam de inteligência se resume a curiosidade.'
    ]
}

document.write(` ${frasedodia.frase}`+'</br>')

const autoria ={
    autor: ['Aaron Swartz']
}
document.write(`${autoria.autor}`+ '</br>')


// ARRAY DE MESES DO ANO
document.write(`<h2>Array de meses do ano</h2>`)

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril...']

document.write(`${meses[0]}, ${meses[1]}, ${meses[2]}, ${meses[3]}`)

document.write(`<h2>Objeto jogo</h2>`)


let game={
    jogo: 'League Of Legends - LOL',
    desenvolvedor: 'Riot Games',
    lancamento: 2009

}

document.write(`Jogo: ${game.jogo}`+ '</br>')
document.write(`Desenvolvedor: ${game.desenvolvedor}`+ '</br>')
document.write(`Ano de Lançamento: ${game.lancamento}`)









