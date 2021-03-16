const resumoPedido = require("../resumoPedido");
const textoTroco = require("./textoTrocoDinheiro");
const util = require("../../util");
const agradecimentos = require("../agradecimentos");
const banco = require("../../banco");

function execute(user, msg) {
  let arrayMsgRetorno = [];
  
  //Voltar para o menu anterior
  if(msg === '#' || msg === '*')
  {
    banco.db[user].formaPagamento = '';
    arrayMsgRetorno = resumoPedido.execute(user, msg);
    return arrayMsgRetorno;
  }
  else
  {
    let formaPagEscolhida = '';
    if(msg === "1")
      formaPagEscolhida = 'Débito';
    else if(msg === "2")
      formaPagEscolhida = 'Crédito';
    else if(msg === "1")
      formaPagEscolhida = 'Dinheiro';

    banco.db[user].formaPagamento = util.removerAcento(formaPagEscolhida);
  }

  if(msg === '3')
  {
    //chamar opcao para digitar troco
    arrayMsgRetorno = textoTroco.textoDinheiroTroco(user, msg);
    return arrayMsgRetorno;
  }

  arrayMsgRetorno.push({stage: 0});

  //finalização do Pedido
  let resumoCompleto = resumoPedido.resumoCarrinhoCompleto(user, msg);
  arrayMsgRetorno.push({texto: resumoCompleto});
  
  let textAgradecimentos = agradecimentos.agradecimentos(user, msg);
  arrayMsgRetorno.push({texto: textAgradecimentos});

  //Limpa os itens do banco
  banco.db[user].itens = [];
  //boas vindas (inicio do processo)
  //banco.db[user].stage = 0;

  //retornar forma de pagamento
  return arrayMsgRetorno;
}

exports.execute = execute;
