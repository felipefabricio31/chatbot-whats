const banco = require("../banco");
const addProdutoCarrinho = require("./addProdutoCarrinho");

  function execute(user, msg) {
    let itensCarrinho = addProdutoCarrinho.execute(user, msg);

    banco.db[user].stage = 3;
    
    return itensCarrinho;
  }
  
exports.execute = execute;
