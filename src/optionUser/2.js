const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {

  let addItens = 
    `*🎉 Item(${cardapio.menu[msg].descricao}) adicionado ao seu carrinho 🎉*

      Deseja visualizar o cardápio para adicionar novos itens?
      Digite: 1 🧾

      Já fez seu pedido e deseja conferir?
      Digite: 2 🛒

      Conferiu seu pedido e quer finalizar?
      Digite: 3 😋
    `    
    banco.db[user].itens.push(cardapio.menu[msg]);

    console.log("Banco --> ", banco.db[user].itens);

  return [addItens];
}

exports.execute = execute;
