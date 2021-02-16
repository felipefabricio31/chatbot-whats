const menu = require("./menu");
const resumoPedido = require("./resumoPedido");
const banco = require("../banco");
const alterarPedido = require("./alterarPedido");
const cancelarPedido = require("./cancelamentoPedido");
const finalizarPedido = require("./finalizarPedido/finalizarPedido");

function execute(user, msg) {

  //Deseja visualizar o cardápio para adicionar novos itens?
  if (msg === "1") {
    let menus = menu.execute(user, msg);
    //Escolher item do menu
    banco.db[user].stage = 6;
    return menus;
  }

  //Já fez seu pedido e deseja conferir?
  if (msg === "2") {
    let resumo = resumoPedido.execute(user, msg);
    return resumo;
  }

  //Deseja remover itens do seu pedido?
  if (msg === "3") {
    let alteracao = alterarPedido.execute(user, msg);
    return alteracao;
  }

  // Conferiu seu pedido e quer finalizar?
  if (msg === "4") {
    console.log("Opção 4 em implementação");
    let fecharPedido = finalizarPedido.execute(user, msg);
    return fecharPedido;
  }
  
  // Deseja cancelar seu pedido?
  if (msg === "5") {
    let retornoCancelamento = cancelarPedido.execute(user, msg);
    return retornoCancelamento;
  }

  // Deseja falar com um de nossos atendentes?
  if (msg === "6") {
    console.log("Opção 6 em implementação");

    return;
  }

  //Apresenta o pedido para conferência
  if (!cardapio.menu[msg]) {
    return [
    "Código inválido 😭, digite corretamente para concluir ou realizar seu pedido. 🥳"
    ];
  }


  return banco.db[user].stage = 2;
}

exports.execute = execute;
