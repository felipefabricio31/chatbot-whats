const resumoPedido = require("../resumoPedido");
const textoFormaPag = require("./textoFormaPagamento");
const util = require("../../util");
const banco = require("../../banco");

function execute(user, msg) {
  //Voltar para o menu anterior
  if(msg === '#' || msg === '*')
  {
    return resumoPedido.execute(user, msg);
  }

  //Voltar para o menu anterior
  if(msg === '1')
  {
    banco.db[user].observacao = '';

    //observacaoDigitada.js
    banco.db[user].stage = 5;
  }
  else
  {
    banco.db[user].observacao = util.metodos.removerAcento(msg);
  }
  
  let textoFp = textoFormaPag.textoFormaPagamento(user, msg);

  return textoFp;
}

exports.execute = execute;
