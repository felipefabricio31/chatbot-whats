const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {
    let arrayMsgRetorno = [];

    arrayMsgRetorno.push({stage: 4});

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoAlterarPedido(user, msg);
    //Add item ao array
    arrayMsgRetorno.push({texto:resumo});

    let opcaoDesejada = `*😔 Para remover um item do seu carrinho, digite o código desejado (Exemplo 0). 😭*\n\n`;
    opcaoDesejada += `*- Digite a opção desejada:* \n\n`;
    opcaoDesejada += `*- Deseja voltar ao menu anterior❓*
    Digite: *#* \n`;
    //Add item ao array
    arrayMsgRetorno.push({texto:opcaoDesejada});

    //OpcaoSelecionadaAlterarPedido.js
    //banco.db[user].stage = 4;

    return arrayMsgRetorno;
  }
  
exports.execute = execute;
