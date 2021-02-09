const menu = require("./menu");
const resumoPedido = require("./resumoPedido");
const banco = require("../banco");
const alterarPedido = require("./alterarPedido");

function execute(user, msg) {
  
  //Deseja visualizar o cardápio para adicionar novos itens?
  if (msg === "1") {
    let menus = menu.execute(user, msg);
    banco.db[user].stage = 6;
    return menus;
  }

  //Já fez seu pedido e deseja conferir?
  if (msg === "2") {
    let resumo = resumoPedido.execute(user, msg);
    return resumo;
  }

  //Deseja alterar seu pedido?
  if (msg === "3") {
    let alteracao = alterarPedido.execute(user, msg);
    return alteracao;
  }

  // Conferiu seu pedido e quer finalizar?
  if (msg === "4") {
    
    console.log("Option 4 em implementação");

    return;
  }

}

exports.execute = execute;
