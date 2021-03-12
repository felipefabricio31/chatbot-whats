const banco = require("../banco");
const agradecimentos = require("./agradecimentos");

  function execute(user, msg) {
    //Limpa os itens do banco
    banco.db[user].itens = [];

    //Mensagem de despedida
    let retornoCancelamento = agradecimentos.cancelamentoPedido(user, msg);

    let arrayMsgRetorno = [];
    arrayMsgRetorno.push({stage: 0});
    arrayMsgRetorno.push({texto:retornoCancelamento});

    //let bemVindo = boasVindas.execute(user, msg);
    //banco.db[user].stage = 0;

    return arrayMsgRetorno;
  }

module.exports = { execute };