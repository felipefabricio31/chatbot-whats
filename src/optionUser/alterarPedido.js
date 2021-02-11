const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {
    console.log("cheguei na alteracao de pedido");

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoBD(user, msg);

    let opcaoDesejada = `*Informe o item que deseja excluir do seu pedido.*
      Digite a opção desejada: `;

      //OpcaoSelecionadaAlterarPedido.js
      banco.db[user].stage = 4;

    return [resumo + opcaoDesejada];
  }
  
exports.execute = execute;
