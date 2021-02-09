const banco = require("../banco");
const optionsMenu = require("./optionsMenu");

  function execute(user, msg) {
    let resumo = "*_RESUMO DO PEDIDO_* \n \n";

    let total = 0;
    banco.db[user].itens.forEach((value) => {
      resumo += `_${value.descricao} ------------ R$ ${value.preco}_ \n`;

      total += value.preco;
    });

    resumo += "\n-------------------------------------\n";
    resumo += `*_Total R$ ${total.toFixed(2)}_* `;
    
    resumo += "\n-------------------------------------\n";

    //Altera o estado para o menu de opções
    banco.db[user].stage = 3;

    //Chamar menu para continuação do processo
    let opcoesMenu = optionsMenu.execute(user, msg);
    
    return [resumo + opcoesMenu];
  }
  
exports.execute = execute;
