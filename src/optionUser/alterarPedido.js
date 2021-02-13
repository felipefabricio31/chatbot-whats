const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoBD(user, msg);

    let opcaoDesejada = "\n----------------------------------------------\n";

    opcaoDesejada += `*😔 Informe o item que deseja remover do seu pedido. 😭*`;
    opcaoDesejada += `*- Digite a opção desejada: 🧐* \n`;
    opcaoDesejada += `- Deseja voltar ao menu anterior⁉️
      *Digite #* \n`;

      //OpcaoSelecionadaAlterarPedido.js
      banco.db[user].stage = 4;

    return [resumo + opcaoDesejada];
  }
  
exports.execute = execute;
