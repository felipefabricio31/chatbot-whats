const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {
  //Apresenta a msg de item adicionado ao carrinho
  let addItem = `*Digite a quantidade para continuar:* \n\n`;

  addItem += `----------------------------------------------\n`;

  addItem += `*Deseja voltar ao menu anterior❓*\n`;
  addItem += `Digite: *#* \n`;

  banco.db[user].produtoEscolhido = msg;
  
  //Altera o estado para o menu de opções
  banco.db[user].stage = 5;

  return [addItem];
}

exports.execute = execute;
