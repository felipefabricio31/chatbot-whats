const util = require("../../util");
const resumoPedido = require("../resumoPedido");
const observacao = require("./textoObservacaoPedido");
const banco = require("../../banco");

function execute(user, msg) 
{
  let arrayMsgRetorno = [];

  let numeroCaracteresMinimoEndereco = 15;
  //inicializa
  banco.db[user].endereco = '';
  
  //Voltar para o menu anterior
  if(msg === '#')
  {
    let textoResumo = resumoPedido.execute(user, msg);
    return textoResumo;
  }

  //validação básica(provisória), interessante incluir uma validação de endereco por CEP
  //ou analisar uma melhor alternativa
  let campoValido = util.validarQtdCaracteres(numeroCaracteresMinimoEndereco, msg);
  if(!campoValido)
  {
    arrayMsgRetorno.push({stage: 11});

    let msgErro = '*_Endereço inválido, você precisa informar um endereço com mais de 15 caracteres. Por favor, digite novamente._*';
    arrayMsgRetorno.push({texto: msgErro});
    return arrayMsgRetorno;
  }
  
  //OpcaoSelecionadaAlterarPedido.js
  arrayMsgRetorno.push({stage: 13});

  //Retorna o resumo e a lista de opções do menu
  let resumoCarrinho = resumoPedido.resumoCarrinhoBD(user, msg);  
  
  let endereco = "\n *Endereço:* ";
  endereco += util.removerAcento(msg);
  //Add endereco ao banco de dados
  banco.db[user].endereco = endereco;

  arrayMsgRetorno.push({texto: resumoCarrinho + endereco});
  
  //Retorna o texto da observação
  let array = observacao.textoObservacao(user, msg);
  array.forEach(item => {
    arrayMsgRetorno.push({texto: item.texto});
  })
  
  return arrayMsgRetorno;
}

exports.execute = execute;
