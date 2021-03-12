
  function execute(user, msg) {
    
    let opcoes = `
*1* - Para visualizar o cardápio e adicionar novos itens 🧾♻️

*2* - Já fez seu pedido e deseja conferir 🛒✅

*3* - Para remover itens do seu carrinho 📝⛔️

*4* - Conferir pedido e finalizar 😋🤑

*5* - Para cancelar seu pedido 😭❌
    `;

    return opcoes;
  }
  
exports.execute = execute;
