const banco = require("../../banco");
const resumoPedido = require("../resumoPedido");

function execute(user, msg) {
    let arrayMsgRetorno = [];

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoBD(user, msg);
    //Add item ao array
    arrayMsgRetorno.push({texto:resumo});

    let opcaoDesejada = `*Por favor, digite o seu endereço completo*\n
    Nome da Rua:
    Bairro:
    Número da residência:
    Cidade(opcional):
    Cep(Opcional)\n`;

    opcaoDesejada += "\n----------------------------------------------\n";

    opcaoDesejada += `*- Deseja voltar ao menu anterior❓*
    Digite: *#* \n`;

    //Add item ao array
    arrayMsgRetorno.push({texto:opcaoDesejada});

      //informarEndereco.js
      banco.db[user].stage = 11;

    return arrayMsgRetorno;
}

exports.execute = execute;
