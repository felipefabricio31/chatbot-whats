const banco = require("../banco");
const addProdutoCarrinho = require("./addProdutoCarrinho");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {

    console.log("Opcao selecionada (escolherItemMenu)", msg);
    let arrayMsgRetorno = [];

    if(msg === "#" || msg === "*"){
      //Retorna o resumo e a lista de opções do menu
      let arrayMsgRetornoMenu  = resumoPedido.execute(user, msg);
      return arrayMsgRetornoMenu;
    }

    //isNaN para saber se a string contém somente números, se for falso significa que é um número:
    if(isNaN(msg))
    {
      let msgRetorno = `*Digito inválido*. Por favor, *digite umas das opções listadas* para adicionar o item ao seu carrinho.😭
    
      --------------------------------------------------------
    
      *#* - Deseja voltar ao menu anterior 🥺`;

      //Add item ao array
      arrayMsgRetorno.push({texto: msgRetorno});

      return arrayMsgRetorno;
    }

    let arrayRetornoItensCarrinho = addProdutoCarrinho.execute(user, msg);
    
    return arrayRetornoItensCarrinho;
  }
  
exports.execute = execute;
