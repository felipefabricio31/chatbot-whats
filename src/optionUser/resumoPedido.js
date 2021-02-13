const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");

  function execute(user, msg) {
    
    //Lista todos os produtos do carrinho
    let resumoCarrinho = resumoCarrinhoBD(user, msg);
    
    //Chamar menu para continuação do processo
    let listaOpcoes = opcoesMenu.execute(user, msg);

    //Altera o estado para o menu de opções
    banco.db[user].stage = 3;

    return [resumoCarrinho + listaOpcoes];
  }

  //Lista todos os produtos do carrinho
  function resumoCarrinhoBD(user, msg) {
    let resumo = "\n*_RESUMO DO PEDIDO_* \n \n";

    let total = 0;
    let index = 0;
    banco.db[user].itens.forEach((value) => {
      resumo += `_*${index}*   -${value.descricao} ------------ R$ ${value.preco}_ \n`;

      total += value.preco;

      index++;
    });

    if(banco.db[user].itens.length === 0){
      resumo += `_* Seu carrinho está vazio, estou ansioso para matar sua FOME haha' 😎
      BORAAAA COMPRAR? 😍 *_ \n`;
    }

    resumo += "\n----------------------------------------------\n";
    resumo += `*_Total R$ ${total.toFixed(2)}_* `;
    
    resumo += "\n----------------------------------------------\n";
    
    return [resumo];
  }
  
module.exports = { execute, resumoCarrinhoBD };
