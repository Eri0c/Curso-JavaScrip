let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxAltura = document.querySelector('#altura')
let cxPeso = document.querySelector('#peso')
let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')
let cxImc = document.querySelector('#resultadoImc')
let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

btnEnviar.addEventListener('click', function (e) {
    let nome = cxNome.value
    let idade = cxIdade.value
    let altura = cxAltura.value
    let peso = cxPeso.value
    let imc = (peso / (altura * altura)).toFixed(1)
    
    console.log(nome)
    console.log(idade)
    console.log(altura)
    console.log(peso)
    console.log(imc)

    cxImc.value = imc 
    let sit = situacaoDoPeso (imc)
    aviso.textContent = sit
// Saída de dados
   /*
    alert( 'Nome' + nome + '\n' + 'Idade' + idade + 'anos\n' + 'Peso' + peso + 'Kg\n' + 'Altura' + altura + 'm\n' + 'IMC' + imc + '' + sit)
    */
   
    //OBJETO PESSOA
    let pessoa = {
        nome : nome,
        idade : idade,
        altura : altura,
        peso : peso,
        imc : imc,
        sit : sit,
}

console.log (pessoa)
dados[1].textContent = pessoa.nome
dados[2].textContent = pessoa.idade + " anos "
dados[3].textContent = pessoa.altura + " m "
dados[4].textContent = pessoa.peso + " Kg "
dados[5].textContent = pessoa.imc + "" + pessoa.sit

//Previnir o comportamento padrão 
e.preventDefault ()


})

function situacaoDoPeso(imc) {
    let situacao = ''
     if (imc < 18.5) 
     {
        situacao = ' Baixo Peso '
    } else if (imc >= 18.5 && imc <= 24.9)

    {
        situacao = ' Peso Normal '

    } else if(imc >= 25 && imc <= 29.9)
    {
        situacao = ' Sobre Peso '
    }   else if (imc >= 30 && imc <= 34.9)
    {
        situacao = ' Obesidade I '
    } else if (imc <= 35 && imc <= 39.9)

    {
        situacao = ' Obesidade II '

    } else if(imc >= 40){
        situacao = ' Obesidade II '
    } else {
        situacao = ' Informe seu peso corretamente '
    }
    return situacao


}