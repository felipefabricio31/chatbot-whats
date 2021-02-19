const util = require("../../util");
const resumoPedido = require("../resumoPedido");
const observacao = require("./textoObservacaoPedido");
const banco = require("../../banco");

function execute(user, msg) 
{
  let numeroCaracteresMinimoEndereco = 15;
  //inicializa
  banco.db[user].endereco = '';
  
  //Voltar para o menu anterior
  if(msg === '#')
  {
    return resumoPedido.execute(user, msg);
  }

  //validação básica(provisória), interessante incluir uma validação de endereco por CEP
  //ou analisar uma melhor alternativa
  let campoValido = util.metodos.validarQtdCaracteres(numeroCaracteresMinimoEndereco, msg);
  if(!campoValido)
  {
    return ['*_Endereço inválido, você precisa informar um endereço com mais de 15 caracteres. Por favor, digite novamente._*'];
  }

  let endereco = "\n *Endereço:* ";
  endereco += util.metodos.removerAcento(msg);
  //Add endereco ao banco de dados
  banco.db[user].endereco = endereco;

  //Separar em outra msg
  //Retorna o texto da observação
  let textoObs = observacao.textoObservacao(user, msg);

  //Retorna o resumo e a lista de opções do menu
  let resumoCarrinho = resumoPedido.resumoCarrinhoBD(user, msg);
  
  console.log("Fim informar endereco");

  return [resumoCarrinho + endereco + textoObs];
}

exports.execute = execute;
