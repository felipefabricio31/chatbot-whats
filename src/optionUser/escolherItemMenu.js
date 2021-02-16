const banco = require("../banco");
const addProdutoCarrinho = require("./addProdutoCarrinho");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {

    console.log("Opcao selecionada", msg);

    if(msg === "#" || msg === "*"){
      //Retorna o resumo e a lista de opções do menu
      let resumoCarrinho = resumoPedido.execute(user, msg);
      return resumoCarrinho;
    }

    //isNaN para saber se a string contém somente números, se for falso significa que é um número:
    if(isNaN(msg))
    {
      return [
    `*Digito inválido*. Por favor, *digite umas das opções listadas* para adicionar o item ao seu carrinho.😭
    
  --------------------------------------------------------

  *Deseja voltar ao menu anterior❓*🥺 
  - Digite: *#*
        `
      ];
    }

    let itensCarrinho = addProdutoCarrinho.execute(user, msg);
    
    return itensCarrinho;
  }
  
exports.execute = execute;
