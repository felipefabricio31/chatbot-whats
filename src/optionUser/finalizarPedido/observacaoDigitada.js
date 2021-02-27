const resumoPedido = require("../resumoPedido");
const textoFormaPag = require("./textoFormaPagamento");
const util = require("../../util");
const banco = require("../../banco");

function execute(user, msg) {
  
  //Voltar para o menu anterior
  if(msg === '1' || msg === '#' || msg === '*')
  {
    banco.db[user].observacao = '';
    return resumoPedido.execute(user, msg);
  }
  else
  {
    banco.db[user].observacao = util.removerAcento(msg);
  }
  
  let textoFp = textoFormaPag.textoFormaPagamento(user, msg);

  return textoFp;
}

exports.execute = execute;
