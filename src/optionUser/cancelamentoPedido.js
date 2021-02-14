const banco = require("../banco");
const index = require("../index");
const agradecimentos = require("./agradecimentos");
const boasVindas = require("./boasVindas");

  function execute(user, msg) {
    //Limpa os itens do banco
    banco.db[user].itens = [];

    //Mensagem de despedida
    let retornoCancelamento = agradecimentos.cancelamentoPedido(user, msg);

    //let bemVindo = boasVindas.execute(user, msg);
    banco.db[user].stage = 0;

    return retornoCancelamento;
  }

module.exports = { execute };