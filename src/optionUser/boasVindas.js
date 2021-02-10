const banco = require("../banco");

function execute(user, msg, contato) {
  
  banco.db[user].stage = 1;

  return [
    `
      *Olá* ${contato},
      Bem vindo(a) ao atendimento inteligente da Lanchonete CloudQI 😃,

      *Deseja realizar um pedido?*
      Digite: 1 🧾

      *Já fez seu pedido e deseja conferir?*
      Digite: 2 🛒

      *Conferiu seu pedido e quer finalizar?*
      Digite: 3 😋

      Depois é só aguardar ⏱️ a confirmação do endereço e aproveitar seu pedido‼️

      *Agradecemos à preferência, bom apetite❕*
    `
  ];
}

exports.execute = execute;
