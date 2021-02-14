const banco = require("../banco");

function execute(user, msg, contato) {
  
  banco.db[user].stage = 1;

  return [
    `
*Olá* ${contato},
Bem vindo(a) ao atendimento inteligente da Lanchonete CloudQI 😃,

*- Deseja realizar um pedido?*
Digite: 1 🧾

*- Deseja falar com um de nossos atendentes?*
Digite: 6 🛒

Depois é só aguardar ⏱️ a confirmação do endereço e aproveitar seu pedido‼️

*Agradecemos à preferência, bom apetite❕*
    `
  ];
}

exports.execute = execute;
