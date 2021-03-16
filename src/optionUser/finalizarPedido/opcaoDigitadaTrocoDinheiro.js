const resumoPedido = require("../resumoPedido");
const util = require("../../util");
const agradecimentos = require("../agradecimentos");
const banco = require("../../banco");

function execute(user, msg) {
  let arrayMsgRetorno = [];

  //Voltar para o menu anterior
  if(msg === '1' || msg === '#' || msg === '*')
  {
    banco.db[user].observacao = '';
    arrayMsgRetorno = resumoPedido.execute(user, msg);
    return arrayMsgRetorno;
  }
  else
  {
    banco.db[user].troco = util.removerAcento(msg);
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

  return arrayMsgRetorno;
}

exports.execute = execute;
