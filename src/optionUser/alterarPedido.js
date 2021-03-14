const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {
    let arrayMsgRetorno = [];

    //OpcaoSelecionadaAlterarPedido.js
    arrayMsgRetorno.push({stage: 4});
    
    let opcaoDesejada = `😔 *Para remover um item do seu carrinho, \n digite o código desejado (Exemplo 0)*. 😭`;    
    //Add item ao array
    arrayMsgRetorno.push({texto:opcaoDesejada});
    
    let voltarMenu = `*Para voltar ao menu anterior digite #*`;
    //Add item ao array
    arrayMsgRetorno.push({texto:voltarMenu});

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoAlterarPedido(user, msg);
    //Add item ao array
    arrayMsgRetorno.push({texto:resumo});

    return arrayMsgRetorno;
  }
  
exports.execute = execute;
