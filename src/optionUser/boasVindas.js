const banco = require("../banco");
const infoCliente = require("../informacoesCliente");

function execute(user, msg, contato) {
  banco.db[user].stage = 1;

  let arrayMsgRetorno = [];

  arrayMsgRetorno.push({texto: `
  *Olá* ${contato},
  Bem vindo(a) ao atendimento inteligente da ${infoCliente.info.NOME_CLIENTE} 😃,
  
  *1* - Para realizar um pedido e matar sua fome 😋
  
  *6* - Para falar com um de nossos atendentes 📱
  
  *_Sua FOME não espera e eu também estou muito ansioso para montar seu pedido, então digite á opção desejada e te aguardo nos próximos passos..._* 😎❤️ 
      `});

  return arrayMsgRetorno;
}

exports.execute = execute;
