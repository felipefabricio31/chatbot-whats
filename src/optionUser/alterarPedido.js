const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoBD(user, msg);

    let opcaoDesejada = "\n----------------------------------------------\n";

    opcaoDesejada += `*😔 Para remover um item do seu pedido, informe o código desejado (Exemplo 0). 😭*\n\n`;
    opcaoDesejada += `*- Digite a opção desejada: 🧐* \n\n`;
    opcaoDesejada += `- Deseja voltar ao menu anterior⁉️
      *Digite #* \n`;

      //OpcaoSelecionadaAlterarPedido.js
      banco.db[user].stage = 4;

    return [resumo + opcaoDesejada];
  }
  
exports.execute = execute;
