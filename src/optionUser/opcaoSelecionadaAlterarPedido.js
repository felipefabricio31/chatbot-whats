const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");
const resumoPedido = require("./resumoPedido");


function execute(user, msg) {
    
  //Voltar para o menu anterior
  if(msg === '#')
  {
    //Retorna o resumo e a lista de opções do menu
    let resumoCarrinho = resumoPedido.execute(user, msg);
    return resumoCarrinho;
  }

  // //Apresenta o pedido para conferência
  if (banco.db[user].itens[msg] === undefined) {
    return [
  `*Código inválido* 😭. Por favor, *digite umas das opções listadas* para remover o item do seu carrinho. 😭
    
  *Deseja voltar ao menu anterior?*
  - Digite: *#*
  `
    ];
  }

  //Apresenta a descricao do produto que será removido
  //parseInt(msg) - 1 = Opção que o usuario digitou - 1, porque o indice inicia na posição 0
  let produtoRemovido = banco.db[user].itens[msg].descricao;

  let qtdItensAntesRemocao = banco.db[user].itens.length;

  //Deleta do array o item selecionado pelo usuário
  banco.db[user].itens.splice(parseInt(msg), 1);

  let qtdItensDepoisRemocao = banco.db[user].itens.length;

  //Retorna o resumo e a lista de opções do menu
  let resumoCarrinho = resumoPedido.execute(user, msg);
  let msgRemocao = '';

  if(qtdItensAntesRemocao > qtdItensDepoisRemocao){
    msgRemocao = `*🎉 Item(${produtoRemovido}) removido do seu carrinho 🎉* \n`;
  }
  else
  {
    msgRemocao = `*🎉Erro ao remover o item (${produtoRemovido}). Por favor, tente novamente. 🎉* \n`;
  }  

  msgRemocao += "\n----------------------------------------------\n";

  return [msgRemocao + resumoCarrinho];
}


exports.execute = execute;
