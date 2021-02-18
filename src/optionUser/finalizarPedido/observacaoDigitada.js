const resumoPedido = require("../resumoPedido");
const textoFp = require("./textoFormaPagamento");
const util = require("../../util");
const banco = require("../../banco");

function OpcaoDigitadaObservacao(user, msg) {

  //Voltar para o menu anterior
  if(msg === '#' || msg === '*')
  {
    return resumoPedido.execute(user, msg);
  }

  banco.db[user].observacao = '';

  //Voltar para o menu anterior
  if(msg !== '1')
    banco.db[user].observacao = util.metodos.removerAcento(msg);

  return textoFp.textoFormaPagamento(user, msg);
}

exports.metodos = OpcaoDigitadaObservacao;
