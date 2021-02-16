const cardapio = require("../cardapio");
const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");
const resumoPedido = require("./resumoPedido");

function execute(user, msg) {

  if(msg === "#" || msg === "*"){
    //Retorna o resumo e a lista de opções do menu
    let resumoCarrinho = resumoPedido.execute(user, msg);
    return resumoCarrinho;
  }

  //isNaN para saber se a string contém somente números, se for falso significa que é um número:
  if(isNaN(msg))
  {
    return [
  `*Digito inválido* 😭. Por favor, *digite um número* para adicionar o produto ao seu carrinho.😭
  
  -----------------------------------------------------

  *Deseja voltar ao menu anterior❓* 
  - Digite: *#*
      `
    ];
  }

  let produtoEscolhido = banco.db[user].produtoEscolhido;

  let descricaoProduto = cardapio.menu[produtoEscolhido].descricao;

  //Atribui o valor digitado ao array
  cardapio.menu[produtoEscolhido].quantidade = msg;

  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*🎉 Adicionamos _(${msg} - ${descricaoProduto})_ ao seu carrinho 🎉* \n`;
  addItem += `----------------------------------------------------- \n`;

  //Adiciona o item escolhido ao carrinho
  banco.db[user].itens.push(cardapio.menu[produtoEscolhido]);

  //Retorna a lista de opções do menu
  let listaOpcoes = opcoesMenu.execute(user, msg);

  //opcaoSelecionada.js
  banco.db[user].stage = 3;

  return [addItem + listaOpcoes];
}

exports.execute = execute;
