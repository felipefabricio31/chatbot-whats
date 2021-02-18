const banco = require("../../banco");

function Observacao(user, msg) {
    let opcaoDesejada = "\n \n----------------------------------------------\n";

    opcaoDesejada += `*- Para incluir alguma observação ao seu pedido, por exemplo, _"lanche sem salada"_ é só digitar a observação e enviar:*\n`;

    opcaoDesejada += `*- Para pular esta etapa,* digite: *1*\n \n`;

    opcaoDesejada += "\n----------------------------------------------\n";

    opcaoDesejada += `*- Deseja voltar ao menu anterior❓*
    Digite: *#* \n`;

      //observacaoDigitada.js
      banco.db[user].stage = 13;

    return [opcaoDesejada];
}

exports.textoObservacao = Observacao;
