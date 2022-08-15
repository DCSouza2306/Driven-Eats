let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

let precoPrato;
let precoBebida;
let precoSobremesa;

function selecionaPrato(botao){
    const botaoSelecionado = document.querySelector(".prato .selecionado");
    const botaoCheck = document.querySelector('.prato .check')

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
        botaoCheck.classList.add('escondido');
        botaoCheck.classList.remove('check');
    }

    botao.classList.add("selecionado");

    pratoSelecionado = document.querySelector(".prato .selecionado .nome-item");
    precoPrato = document.querySelector('.prato .selecionado .preco-itens');

    const icone = botao.querySelector('.escondido');

    icone.classList.remove('escondido');
    icone.classList.add('check');

    habilitarBotao();
}

function selecionaBebida(botao){
    const botaoSelecionado = document.querySelector(".bebida .selecionado");
    const botaoCheck = document.querySelector('.bebida .check')

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
        botaoCheck.classList.add('escondido');
        botaoCheck.classList.remove('check');
    }

    botao.classList.add("selecionado");

    bebidaSelecionada = document.querySelector(".bebida .selecionado .nome-item");
    precoBebida = document.querySelector('.bebida .selecionado .preco-itens');

    const icone = botao.querySelector('.escondido');

    icone.classList.remove('escondido');
    icone.classList.add('check');

    habilitarBotao();
}

function selecionaSobremesa(botao){
    const botaoSelecionado = document.querySelector(".sobremesa .selecionado");
    const botaoCheck = document.querySelector('.sobremesa .check')

    if(botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
        botaoCheck.classList.add('escondido');
        botaoCheck.classList.remove('check');
    }

    botao.classList.add("selecionado");

    sobremesaSelecionada = document.querySelector(".sobremesa .selecionado .nome-item");
    precoSobremesa = document.querySelector('.sobremesa .selecionado .preco-itens');

    const icone = botao.querySelector('.escondido');

    icone.classList.remove('escondido');
    icone.classList.add('check');


    habilitarBotao();
}

function habilitarBotao(){
    if(sobremesaSelecionada!==null && bebidaSelecionada!==null && pratoSelecionado!==null){
        let botaoHabilitado = document.querySelector(".botao");
        botaoHabilitado.classList.add('escondido');

        botaoHabilitado = document.querySelector('.botao-habilitado');
        botaoHabilitado.classList.remove('escondido');
    }
}

function confirmarPedido(){

    const prato = document.querySelector('.pedido-prato .nome');
    prato.innerHTML = pratoSelecionado.innerHTML;

    const bebida = document.querySelector('.pedido-bebida .nome');
    bebida.innerHTML = bebidaSelecionada.innerHTML;

    const sobremesa = document.querySelector('.pedido-sobremesa .nome');
    sobremesa.innerHTML = sobremesaSelecionada.innerHTML;

    let valorPrato = precoPrato.innerHTML;
    let valorBebida = precoBebida.innerHTML;
    let valorSobremesa = precoSobremesa.innerHTML;

    valorPrato = valorPrato.replace("R$ ", "");
    valorBebida = valorBebida.replace("R$ ", "");
    valorSobremesa = valorSobremesa.replace("R$ ", "");

    const valorPratoConfirmado = document.querySelector('.pedido-prato .preco');
    valorPratoConfirmado.innerHTML = valorPrato;

    const valorBebidaConfirmada = document.querySelector('.pedido-bebida .preco');
    valorBebidaConfirmada.innerHTML = valorBebida;

    const valorSobremesaConfirmada = document.querySelector('.pedido-sobremesa .preco');
    valorSobremesaConfirmada.innerHTML = valorSobremesa;

    valorPrato = valorPrato.replace(",", ".");
    valorBebida = valorBebida.replace(",", ".");
    valorSobremesa = valorSobremesa.replace(",", ".");

    valorPrato = Number(valorPrato);
    valorBebida = Number(valorBebida);
    valorSobremesa = Number (valorSobremesa);

    let somaValores = valorPrato + valorSobremesa + valorBebida;
    somaValores = somaValores.toFixed(2);

    somaValores = String(somaValores);

    somaValores = somaValores.replace(".",",");

    somaValores = `R$ ${somaValores}`;

    let valorTotalConfirmado = document.querySelector('.total span');
    valorTotalConfirmado.innerHTML = somaValores;

    console.log(somaValores);


    let elemento = document.querySelector(".fundo");
    elemento.classList.remove('escondido');

    elemento = document.querySelector('.confirma-pedido');
    elemento.classList.remove('escondido');
}


function chamaWpp(botao){
    let nome = prompt("Digite seu nome");
    let endereco = prompt("Digite seu endereço");

    let textoPrato = pratoSelecionado.innerHTML;
    let textoBebida = bebidaSelecionada.innerHTML;
    let textoSobremesa = sobremesaSelecionada.innerHTML;

    let valorPrato = precoPrato.innerHTML;
    let valorBebida = precoBebida.innerHTML;
    let valorSobremesa = precoSobremesa.innerHTML;

    valorPrato = valorPrato.replace("R$ ", "");
    valorPrato = valorPrato.replace(",", ".");

    valorBebida = valorBebida.replace("R$ ", "");
    valorBebida = valorBebida.replace(",", ".");
    
    valorSobremesa = valorSobremesa.replace("R$ ", "");
    valorSobremesa = valorSobremesa.replace(",", ".");

    valorPrato = Number(valorPrato);
    valorBebida = Number(valorBebida);
    valorSobremesa = Number(valorSobremesa);

    let somaValores = valorBebida + valorPrato + valorSobremesa;

    somaValores = somaValores.toFixed(2);

    let texto = `Olá, gostaria de fazer o pedido: \n - Prato: ${textoPrato} \n - Bebida: ${textoBebida} \n - Sobremesa: ${textoSobremesa} \n Valor total é de R$ ${somaValores}\n\n Nome: ${nome}\n Endereço: ${endereco}`;

    let URICode = encodeURIComponent(texto);

    let mensagemWpp = `https://wa.me/5528988146271?text=${URICode}`;

    botao.setAttribute("href",mensagemWpp);
    botao.setAttribute("target", "_blank");
}

function voltarPedido(){
    let elemento = document.querySelector('.confirma-pedido');
    elemento.classList.add('escondido');

    elemento = document.querySelector('.fundo');
    elemento.classList.add('escondido');
}