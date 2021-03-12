const banco = require("../banco");
const opcoesMenu = require("./opcoesMenu");

  function execute(user, msg) {
    let arrayMsgRetorno = [];

    arrayMsgRetorno.push({stage: 3});
    
    //Lista todos os produtos do carrinho
    let resumoCarrinho = resumoCarrinhoBD(user, msg);
    //Add item ao array
    arrayMsgRetorno.push({texto:resumoCarrinho});
    
    //Chamar menu para continuação do processo
    let listaOpcoes = opcoesMenu.execute(user, msg);
    //Add item ao array
    arrayMsgRetorno.push({texto:listaOpcoes});

    //Altera o estado para o menu de opções
    //banco.db[user].stage = 3;

    return arrayMsgRetorno;
  }

  //Lista todos os produtos do carrinho
  function resumoCarrinhoBD(user, msg) {
    let resumo = "\n*_RESUMO DO PEDIDO_* \n \n";

    let total = 0;
    banco.db[user].itens.forEach((value) => {
      resumo += `_-  ${value.descricao} -- R$${value.preco.toFixed(2)} -- Qtd: *${value.quantidade}*_ \n`;
      total += value.preco;
    });

    if(banco.db[user].itens.length === 0){
      resumo += `*Seu carrinho está vazio, estou ansioso para matar sua FOME haha* 😎
      *_BORAAAA COMPRAR❓_*😍 \n`;
    }

    resumo += "\n----------------------------------------------\n";
    resumo += `*_Total R$ ${total.toFixed(2)}_* `;
    
    resumo += "\n----------------------------------------------\n";
    
    return resumo;
  }

  //Lista todos os produtos do carrinho
  function resumoCarrinhoCompleto(user, msg) {
  
    //Retorna a lista produtos que estão no carrinho
    let carrinhoPedido = resumoCarrinhoBD(user, msg);

    //Retorna o endereço informado pelo cliente
    let endereco = banco.db[user].endereco;
    endereco += "\n ---------------------------------------------- \n";

    //Retorna a forma de pagamento informado pelo cliente
    let formaPagamento = "\n *Forma de Pagamento:*"
    formaPagamento += banco.db[user].formaPagamento;
    formaPagamento += "\n ---------------------------------------------- \n";

    //Retorna o endereço informado pelo cliente
    let observacao = "\n *Observação:* "
    observacao += banco.db[user].observacao;
    
    return carrinhoPedido + endereco + formaPagamento + observacao;
  }
  
  function resumoCarrinhoAlterarPedido(user, msg) {
    let resumo = "\n*_RESUMO DO PEDIDO_* \n \n";

    let total = 0;
    let index = 0;
    banco.db[user].itens.forEach((value) => {
      resumo += `_Cód: *${index}*  --  ${value.descricao} -- R$${value.preco.toFixed(2)} -- Qtd: *${value.quantidade}*_ \n`;

      total += value.preco;

      index++;
    });

    if(banco.db[user].itens.length === 0){
      resumo += `*Seu carrinho está vazio, estou ansioso para matar sua FOME haha* 😎
      *_BORAAAA COMPRAR❓_*😍 \n`;
    }

    resumo += "\n----------------------------------------------\n";
    resumo += `*_Total R$ ${total.toFixed(2)}_* `;
    
    resumo += "\n----------------------------------------------\n";
    
    return resumo;
  }
  
module.exports = { execute, resumoCarrinhoBD, resumoCarrinhoAlterarPedido, resumoCarrinhoCompleto };