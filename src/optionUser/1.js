const menu = require("./menu");
const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {

  //Apresenta o cardapio para o cliente
  if (msg === "1") {

    let menus = menu.execute(user, msg);
    banco.db[user].stage = 6;
    return menus;
  }

  //Apresenta o pedido para conferência
  if (msg === "3") {
    banco.db[user].stage = 3;
    return ["Estamos fechando seu pedido, ok?"];
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
