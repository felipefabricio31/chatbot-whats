const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

function execute(user, msg) {
  let arrayMsgRetorno = [];
    
  //Voltar para o menu anterior
  if(msg === '#')
  {
    //Retorna o resumo e a lista de opções do menu
    let arrayMsgRetorno = resumoPedido.execute(user, msg);
    return arrayMsgRetorno;
  }

  // //Apresenta o pedido para conferência
  if (banco.db[user].itens[msg] === undefined) {
    
    arrayMsgRetorno.push({stage: 4});

    let codInvalido = `*Código inválido*. Por favor, *digite umas das opções listadas* para remover o item do seu carrinho. 😭`;
    //Add item ao array
    arrayMsgRetorno.push({texto:codInvalido});
    
    let voltarMenu = `*Para voltar ao menu anterior digite #*`;
    //Add item ao array
    arrayMsgRetorno.push({texto:voltarMenu});

    return arrayMsgRetorno;
  }

  //Apresenta a descricao do produto que será removido
  //parseInt(msg) - 1 = Opção que o usuario digitou - 1, porque o indice inicia na posição 0
  let produtoRemovido = banco.db[user].itens[msg].descricao;

  let qtdItensAntesRemocao = banco.db[user].itens.length;

  //Deleta do array o item selecionado pelo usuário
  banco.db[user].itens.splice(parseInt(msg), 1);

  let qtdItensDepoisRemocao = banco.db[user].itens.length;

  let msgRemocao = '';

  if(qtdItensAntesRemocao > qtdItensDepoisRemocao){
    msgRemocao = `*🎉 Item(${produtoRemovido}) removido do seu carrinho 🎉*`;
  }
  else
  {
    msgRemocao = `*🎉 Erro ao remover o item (${produtoRemovido}). Por favor, tente novamente. 🎉*`;
  }  

  //Add item ao array
  arrayMsgRetorno.push({texto:msgRemocao});
  
  //Retorna o resumo e a lista de opções do menu
  let resumoCarrinho = resumoPedido.execute(user, msg);
  //Add item ao array
  arrayMsgRetorno.push({texto:resumoCarrinho});

  return arrayMsgRetorno;
}

exports.execute = execute;
