const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {
  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*Digite a quantidade para continuar:* \n`;
  
  //Altera o estado para o menu de opções
  banco.db[user].stage = 5;

  banco.db[user].produtoEscolhido = msg;

  return [addItem];
}

exports.execute = execute;
