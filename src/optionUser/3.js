const menu = require("./menu");
const cardapio = require("../cardapio");
const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "1") {
    let menus = menu.execute(user, msg);
    banco.db[user].stage = 6;
    return menus;
  }

  if (msg === "2") {
    console.log("finalizar");

    console.log("finalizar o pedido");

    return "Teste";
  }

}

exports.execute = execute;
