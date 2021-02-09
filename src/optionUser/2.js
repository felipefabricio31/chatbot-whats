const cardapio = require("../cardapio");
const banco = require("../banco");
const optionsMenu = require("./optionsMenu");


function execute(user, msg) {

  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*🎉 Item(${cardapio.menu[msg].descricao}) adicionado ao seu carrinho 🎉* \n`;

  console.log("to aqui");
  //Adiciona o item escolhido ao carrinho
  banco.db[user].itens.push(cardapio.menu[msg]);

  let opcoesMenu = optionsMenu.execute(user, msg);

  return [addItem + opcoesMenu];
}

exports.execute = execute;
