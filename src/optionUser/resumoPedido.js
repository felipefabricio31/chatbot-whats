const banco = require("../banco");

  function execute(user, msg) {
    let resumo = "*RESUMO DO PEDIDO* \n";

    let total = 0;
    banco.db[user].itens.forEach((value) => {
      resumo += `${value.id} - ${value.descricao} ------------  ${value.preco} \n`;

      total += value.preco;
    });

    resumo += "\n-------------------------\n";
    resumo += `*Total R$ ${total}*`;

    //banco.db[user].stage = 3;

    return [resumo];
  }
  
exports.execute = execute;
