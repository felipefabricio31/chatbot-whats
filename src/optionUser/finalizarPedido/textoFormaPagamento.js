const banco = require("../../banco");

function FormaPagamento(user, msg) {
    let arrayMsgRetorno = [];
    //OpcaoSelecionadaAlterarPedido.js
    arrayMsgRetorno.push({stage: 15});

    let texto = `*- Para selecionar a forma de pagamento e finalizar seu pedido, digite uma das opções abaixo:*
    *1* - Débito
    *2* - Crédito
    *3* - Dinheiro (próximo passo você informará o troco.)
    
    *Obrigado por aguardar! Estamos quase finalizando seu pedido...*🥳😋`;

    arrayMsgRetorno.push({texto: texto});
    
    let voltarMenu = `*Para voltar ao menu anterior digite #*`;
    arrayMsgRetorno.push({texto:voltarMenu});

    //formaPagamentoDigitada.js
    //banco.db[user].stage = 15;
    return arrayMsgRetorno;
}

exports.textoFormaPagamento = FormaPagamento;
