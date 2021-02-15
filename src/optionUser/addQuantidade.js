const cardapio = require("../cardapio");
const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");

function execute(user, msg) {

  console.log("banco.db[user].produtoEscolhido --", banco.db[user].produtoEscolhido);

  let produtoEscolhido = banco.db[user].produtoEscolhido;

  let descricaoProduto = cardapio.menu[produtoEscolhido].descricao;

  cardapio.menu[msg].quantidade = msg;

  console.log("cardapio.menu[msg] --", cardapio.menu[msg]);

  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*🎉 Adicionamos ${msg} - ${descricaoProduto} ao seu carrinho 🎉* \n`;
  addItem += `----------------------------------------------------- \n`;

  console.log("push produto --", cardapio.menu[produtoEscolhido]);

  //Adiciona o item escolhido ao carrinho
  banco.db[user].itens.push(cardapio.menu[produtoEscolhido]);

  //Retorna a lista de opções do menu
  let listaOpcoes = opcoesMenu.execute(user, msg);

  //opcaoSelecionada.js
  banco.db[user].stage = 3;

  return [addItem + listaOpcoes];
}

exports.execute = execute;
