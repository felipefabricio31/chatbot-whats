const banco = require("../../banco");
const resumoPedido = require("../resumoPedido");

function execute(user, msg) {
    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoBD(user, msg);

    let opcaoDesejada = `*Por favor, digite o seu endereço completo*\n
    Nome da Rua:
    Bairro:
    Número da residência:
    Cidade(opcional):
    Cep(Opcional)\n`;

    opcaoDesejada += "\n----------------------------------------------\n";

    opcaoDesejada += `*- Deseja voltar ao menu anterior❓*
    Digite: *#* \n`;

      //informarEndereco.js
      banco.db[user].stage = 11;

    return [resumo + opcaoDesejada];
}

exports.execute = execute;
