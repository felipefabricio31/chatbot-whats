  const menu = require("./menu");
const resumoPedido = require("./resumoPedido");
const banco = require("../banco");
const alterarPedido = require("./alterarPedido");

function execute(user, msg) {
  console.log("Antes  --> ", banco.db[user].itens);

  delete banco.db[user].itens[parseInt(msg) -1];

  banco.db[user].stage = 3;



  //Deseja visualizar o cardápio para adicionar novos itens?
  // if (msg === "1") {
  //   let menus = menu.execute(user, msg);
  //   banco.db[user].stage = 6;
  //   return menus;
  // }

  // //Apresenta o pedido para conferência
  // if (!cardapio.menu[msg]) {
  //   return [
  //     "Código inválido 😭, digite corretamente para concluir ou realizar seu pedido. 🥳"
  //   ];
  // }

  console.log("Depois  --> ", banco.db[user].itens);


  return console.log("Verificar");
}

function removerPorId(array, id) {
  var result = array.filter(function(el) {
    return el.id == id;
  });
    
  for(var elemento of result){
    var index = array.indexOf(elemento);    
    array.splice(index, 1);
  }
}
 

exports.execute = execute;
