const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");
const resumoPedido = require("./resumoPedido");


function execute(user, msg) {
  
  console.log("OPCAO INFORMADA --> ", banco.db[user].itens[msg]);

  // //Apresenta o pedido para conferência
  if (banco.db[user].itens[msg] === undefined) {
    return [
      `*Código inválido* 😭. Por favor, *digite umas das opções listadas* para remover o item do seu carrinho. 😭
        
      Eiiii, deseja voltar para o menu anterior? 
      *digite #*
      `
    ];
  }

  //Voltar para o menu anterior
  if(msg === '#')
  {
    //Retorna o resumo e a lista de opções do menu
    let resumoCarrinho = resumoPedido.execute(user, msg);
    return [msgRemocao + resumoCarrinho];
  }

  //Apresenta a descricao do produto que será removido
  //parseInt(msg) - 1 = Opção que o usuario digitou - 1, porque o indice inicia na posição 0
  let produtoRemovido = banco.db[user].itens[msg].descricao;

  //Deleta do array o item selecionado pelo usuário
  removeu = delete banco.db[user].itens[msg];

  console.log("Depois --> ", banco.db[user].itens);

  if(removeu){
    let msgRemocao = `*🎉 Item(${produtoRemovido}) removido do seu carrinho 🎉* \n`;
    msgRemocao += "\n----------------------------------------------\n";

    //Retorna o resumo e a lista de opções do menu
    let resumoCarrinho = resumoPedido.execute(user, msg);
    
    return [msgRemocao + resumoCarrinho];
  }
  else
  {
    let msgRemocao = `*🎉 Erro ao remover o item (${produtoRemovido}). Por favor, tente novamente. 🎉* \n`;
  }  
}


exports.execute = execute;
