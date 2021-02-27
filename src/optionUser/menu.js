const cardapio = require("../cardapio");

function execute(user, msg) {

  let menu = "*Atenção*‼️ \n"; 
  menu += "⚠️ *Para adicionar um item ao seu pedido, digite uma das opções abaixo:* \n\n";
  menu += "*--🟢 MENU DE OPÇÕES 🟢--* \n\n";

    Object.keys(cardapio.menu).forEach((value) => {
      let element = cardapio.menu[value];
      menu += `${value} - ${element.descricao} - R$ ${element.preco} \n`;
    });
    
    return menu;
}

exports.execute = execute;
