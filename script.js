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

function chamaWpp(botao){
    let textoPrato = pratoSelecionado.innerHTML;
    let textoBebida = bebidaSelecionada.innerHTML;
    let textoSobremesa = sobremesaSelecionada.innerHTML;

    let valorPrato = precoPrato.innerHTML;
    let valorBebida = precoBebida.innerHTML;
    let valorSobremesa = precoSobremesa.innerHTML;

    let somaValores = valorBebida + valorPrato + valorSobremesa;

    let texto = `Olá, gostaria de fazer o pedido: \n - Prato: ${textoPrato} \n - Bebida: ${textoBebida} \n - Sobremesa: ${textoSobremesa} \n Valor total é de ${somaValores}`;

    console.log(texto);

    let teste = document.querySelector(".barra-inferior a")
    console.log(teste);
}
