const resumoPedido = require("../resumoPedido");
const util = require("../../util");

function OpcaoDigitadaObservacao(user, msg) {

  //Voltar para o menu anterior
  if(msg === '#' || msg === '*')
  {
    return resumoPedido.execute(user, msg);;
  }

  banco.db[user].observacao = '';

  //Voltar para o menu anterior
  if(msg === '1')
  {
    return resumoPedido.execute(user, msg);;
  }

  //Chamar forma de pagamento

  //retornar forma de pagamento
  return [];
}

exports.metodos = OpcaoDigitadaObservacao;
