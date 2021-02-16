const resumoPedido = require("../resumoPedido");

function execute(user, msg) {
  
  //Retorna o resumo e a lista de opções do menu
  let resumoCarrinho = resumoPedido.resumoCarrinhoBD(user, msg);

  //Voltar para o menu anterior
  if(msg === '#')
  {
    return resumoPedido.execute(user, msg);;
  }

  let endereco = "\n *Endereço:* "

  endereco += removerAcento(msg);

  return [resumoCarrinho + endereco];
}


function removerAcento (text)
{       
    text = text.toUpperCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}


exports.execute = execute;
