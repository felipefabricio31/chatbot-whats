const cardapio = require("../cardapio");

function execute(user, msg) {

  let menu = "*CARDÁPIO* \n";

    Object.keys(cardapio.menu).forEach((value) => {
      let element = cardapio.menu[value];
      menu += `${value} - ${element.descricao} - R$ ${element.preco} \n`;
    });
    
    return [menu];
}

exports.execute = execute;
