# Imagem autodestrutiva
💣 Objetivo: O intuito deste projeto foi criar um sistema web de imagem-autodestrutiva desenvolvido em js. Na ocasião, em uma página web aparecerá um botão que ao ser clicado irá gerar uma imagem que se autodestruirá em 60 segundos, retornando ao estado anterior (vazio) do container. Assim como um temporizador mostrando essa contagem em tempo real.
<h1>Sobre o código</h1>
<p>Se tratando do html foi elaborado um código simples e intuitivo contendo um botão ao qual foi atribuído uma função que posteriormente será trabalhada no javascript. Essa função será a responsável por iniciar a contagem e inserir a imagem dentro do container. Posteriormente será escrito o código para a função <code>reload</code> para que a página seja recarregada e consequentemente a imagem desapareça, "destruíndo" assim a imagem.</p>
<p>Dentro da função <code>gerarImagem</code> em primeira instância existe o bloco de códigos referente a contagem regressiva de 1 minuto; Logo em seguida há a manipulação da <code>id</code> "bg" inserindo uma imagem no container ao desparar o evento de botão (onclick).</p> Com <code>setTimeout( ) e setInterval( ) criei uma função para que a cada 10 minutos a página seja recarregada forçando o usuário a precisar gerar um novo código.
