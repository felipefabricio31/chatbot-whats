const banco = require("../banco");

function execute(user, msg) {
  let arrayMsgRetorno = [];
  arrayMsgRetorno.push({stage: 5});

  let addQtd = `*Digite a quantidade para continuar:*`;
  arrayMsgRetorno.push({texto: addQtd});
  
  let voltarMenu = `*Para voltar ao menu anterior digite #*`;
  arrayMsgRetorno.push({texto:voltarMenu});

  banco.db[user].produtoEscolhido = msg;
  
  //Altera o estado para o menu de opções
  // banco.db[user].stage = 5;

  return arrayMsgRetorno;
}

exports.execute = execute;
