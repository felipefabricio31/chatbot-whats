
  function execute(user, msg) {
    let addItens = 
    `
- Deseja visualizar o cardápio para adicionar novos itens❓
*Digite: 1* 🧾♻️

- Já fez seu pedido e deseja conferir❓
*Digite: 2* 🛒✅

- Deseja remover itens do seu pedido❓
*Digite: 3* 📝⛔️

- Conferiu seu pedido e quer finalizar❓
*Digite: 4* 😋🤑

- Deseja cancelar seu pedido❓
*Digite: 5* 😭❌
    `    
  return [addItens];
  }
  
exports.execute = execute;
