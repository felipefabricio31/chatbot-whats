const resumoPedido = require("../resumoPedido");
const textoTroco = require("./textoTrocoDinheiro");
const util = require("../../util");
const agradecimentos = require("../agradecimentos");
const banco = require("../../banco");

function execute(user, msg) {

  //Voltar para o menu anterior
  if(msg === '#' || msg === '*')
  {
    banco.db[user].formaPagamento = '';
    return resumoPedido.execute(user, msg);;
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
    return textoTroco.textoDinheiroTroco(user, msg);
  }

  //finalização do Pedido
  let resumoCompleto = resumoPedido.resumoCarrinhoCompleto(user, msg);
  let textAgradecimentos = agradecimentos.agradecimentos(user, msg);

  //Limpa os itens do banco
  banco.db[user].itens = [];
  //boas vindas (inicio do processo)
  banco.db[user].stage = 0;

  //retornar forma de pagamento
  return [resumoCompleto + textAgradecimentos];
}

exports.execute = execute;
