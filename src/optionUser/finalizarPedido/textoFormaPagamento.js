const banco = require("../../banco");

function FormaPagamento(user, msg) {
  let texto = "\n \n----------------------------------------------\n";

  texto += `*- Para selecionar a forma de pagamento e finalizar seu pedido, digite uma das opções abaixo:*
  *1* - Débito
  *2* - Crédito
  *3* - Dinheiro (próximo passo você informará o troco.)
  
  *Obrigado por aguardar! Estamos quase finalizando seu pedido...*🥳😋
    
  \n`;

  texto += "\n----------------------------------------------\n";

  texto += `*- Deseja voltar ao menu principal*
  Digite: *#* \n`;

      //observacaoDigitada.js
      banco.db[user].stage = 15;

    return [texto];
}

exports.textoFormaPagamento = FormaPagamento;
