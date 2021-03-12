const cardapio = require("../cardapio");
const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");
const resumoPedido = require("./resumoPedido");

function execute(user, msg) {
  let arrayMsgRetorno = [];
  
  if(msg === "#" || msg === "*"){
    //Retorna o resumo e a lista de opções do menu
    let arrayMsgRetorno  = resumoPedido.execute(user, msg);
    return arrayMsgRetorno ;
  }

  //isNaN para saber se a string contém somente números, se for falso significa que é um número:
  if(isNaN(msg))
  {
    let codigoInvalido = `*Digito inválido* 😭. Por favor, *digite um número* para adicionar o produto ao seu carrinho.😭
  
    -----------------------------------------------------
  
    *#* - Para voltar ao menu anterior`;

    arrayMsgRetorno.push({texto:codigoInvalido});

    return arrayMsgRetorno;
  }

  arrayMsgRetorno.push({stage: 3});

  let produtoEscolhido = banco.db[user].produtoEscolhido;

  let descricaoProduto = cardapio.menu[produtoEscolhido].descricao;

  //Atribui o valor digitado ao array
  cardapio.menu[produtoEscolhido].quantidade = msg;

  //Adiciona o item escolhido ao carrinho
  banco.db[user].itens.push(cardapio.menu[produtoEscolhido]);

  //Retorna a lista de opções do menu
  let listaOpcoes = opcoesMenu.execute(user, msg);
  //Add item ao array
  arrayMsgRetorno.push({texto:listaOpcoes});

  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*🎉Adicionei _Qtd: ${msg} - ${descricaoProduto}_ ao seu carrinho 🎉* \n`;
  
  //Add item ao array
  arrayMsgRetorno.push({texto:addItem});

  //opcaoSelecionada.js
  //banco.db[user].stage = 3;

  return arrayMsgRetorno;
}

exports.execute = execute;
