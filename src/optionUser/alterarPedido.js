const banco = require("../banco");

  function execute(user, msg) {
    console.log("cheguei na alteracao de pedido");
    let resumo = "*_RESUMO DO PEDIDO_* \n \n";

    let total = 0;
    let index = 1;
    banco.db[user].itens.forEach((value) => {
      resumo += `_*${index}*   - ${value.descricao} ------------ R$ ${value.preco}_ \n`;

      total += value.preco;

      index++;
    });

    resumo += "\n-------------------------------------\n";
    resumo += `*_Total R$ ${total.toFixed(2)}_* `;
    
    resumo += "\n-------------------------------------\n";

    //

    let opcaoDesejada = `*Informe o item que deseja excluir do seu pedido.*
      Digite a opção desejada: `;


      //OpcaoSelecionadaAlterarPedido.js
      banco.db[user].stage = 4;

    return [resumo + opcaoDesejada];
  }
  
exports.execute = execute;
