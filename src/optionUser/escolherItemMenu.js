const banco = require("../banco");
const addProdutoCarrinho = require("./addProdutoCarrinho");

  function execute(user, msg) {
    let itensCarrinho = addProdutoCarrinho.execute(user, msg);
    
    return itensCarrinho;
  }
  
exports.execute = execute;
