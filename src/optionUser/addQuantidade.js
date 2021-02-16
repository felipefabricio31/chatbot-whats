const cardapio = require("../cardapio");
const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");

function execute(user, msg) {

  let produtoEscolhido = banco.db[user].produtoEscolhido;

  let descricaoProduto = cardapio.menu[produtoEscolhido].descricao;

  //Atribui o valor digitado ao array
  cardapio.menu[produtoEscolhido].quantidade = msg;

  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*🎉 Adicionamos ${msg} - ${descricaoProduto} ao seu carrinho 🎉* \n`;
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
