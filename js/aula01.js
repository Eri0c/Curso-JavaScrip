/*aula01.js
arquivo js externo
*/
document.write("Olá mundo!");
        console.log("Outro Olá mundo"); // comentário
       // alert("Olá mundo com Alerta");

       let mensagem ="Minha mensagem";
       let mensagem2 ="Outra mensagem";
       let meuPeso = 65;
       let minhaAltura = 1.73;
       let minhaIdade = 24;
       let ehDroador = false;
       let teste= null;

       /* CRIAR CONSTANTES e atribuir valor*/
       const PI = 3.1415
       const TAXA = 0+5
       teste = "Algum conteúdo"

       /* ESCREVER O CONTEÚDO DE VARIANTES e CONSTANTES*/
       document.write("<p> Mensagem: " + mensagem + "</p>")

       document.write(`Mensagem2: ${mensagem2}`)

       document.write("<p> Peso: " + meuPeso + "kg </p>")

       document.write(`Altura: ${minhaAltura} m`)

       document.write("<p> Idade: " + minhaIdade + " anos</p>")

       document.write(`Doador? ${ehDroador}`)

       document.write("<p> Teste: " + teste + " </p>")

       document.write("<p>PI: " + PI + "</p>")

       document.write("<p> TAXA: " + TAXA + "</P>")

       