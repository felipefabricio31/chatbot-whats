const resumoPedido = require("../resumoPedido");
const util = require("../../util");
const agradecimentos = require("../agradecimentos");
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
    banco.db[user].troco = util.removerAcento(msg);
  }
  
  //finalização do Pedido
  let resumoCompleto = resumoPedido.resumoCarrinhoCompleto(user, msg);
  let textAgradecimentos = agradecimentos.agradecimentos(user, msg);

  //Limpa os itens do banco
  banco.db[user].itens = [];
  //boas vindas (inicio do processo)
  banco.db[user].stage = 0;

  return [resumoCompleto + textAgradecimentos];
}

exports.execute = execute;
