const resumoPedido = require("../resumoPedido");
const util = require("../../util");
const banco = require("../../banco");

function OpcaoDigitadaObservacao(user, msg) {

  //Voltar para o menu anterior
  if(msg === '#' || msg === '*')
  {
    return resumoPedido.execute(user, msg);;
  }

  //Voltar para o menu anterior
  if(msg === '1')
  {
    banco.db[user].formaPagamento = '';

    //observacaoDigitada.js
    banco.db[user].stage = 5;
  }
  else
  {
    banco.db[user].formaPagamento = util.metodos.removerAcento(msg);
  }

  if(msg === '3')
  {
    //chamar opcao para digitar troco
    //return textoTroco
  }

  //retornar forma de pagamento
  return [];
}

exports.metodos = OpcaoDigitadaObservacao;
