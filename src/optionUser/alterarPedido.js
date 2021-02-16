const banco = require("../banco");
const resumoPedido = require("./resumoPedido");

  function execute(user, msg) {

    //lista todos os produtos que estão no carrinho
    let resumo = resumoPedido.resumoCarrinhoAlterarPedido(user, msg);

    let opcaoDesejada = `*😔 Para remover um item do seu carrinho, digite o código desejado (Exemplo 0). 😭*\n\n`;
    opcaoDesejada += `*- Digite a opção desejada:* \n\n`;
    opcaoDesejada += `*- Deseja voltar ao menu anterior❓*
    Digite: *#* \n`;

      //OpcaoSelecionadaAlterarPedido.js
      banco.db[user].stage = 4;

    return [resumo + opcaoDesejada];
  }
  
exports.execute = execute;
