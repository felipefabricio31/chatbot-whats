const cardapio = require("../cardapio");
const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");


function execute(user, msg) {
  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*🎉 Item(${cardapio.menu[msg].descricao}) adicionado ao seu carrinho 🎉* \n`;

  //Adiciona o item escolhido ao carrinho
  banco.db[user].itens.push(cardapio.menu[msg]);

  //Retorna a lista de opções do menu
  let listaOpcoes = opcoesMenu.execute(user, msg);

  return [addItem + listaOpcoes];
}

exports.execute = execute;
