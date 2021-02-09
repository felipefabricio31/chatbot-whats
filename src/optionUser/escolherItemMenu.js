const banco = require("../banco");
const addItemCarrinho = require("./2");

  function execute(user, msg) {
    let itensCarrinho = addItemCarrinho.execute(user, msg);

    banco.db[user].stage = 3;
    
    return itensCarrinho;
  }
  
exports.execute = execute;
