const banco = require("../../banco");

function textoDinheiroTroco(user, msg) {
    let arrayMsgRetorno = [];

    //opcaoDigitadaTrocoDinheiro.js
    arrayMsgRetorno.push({stage: 17});

    let textoTroco = `*Troco pra quanto❓*`;
    arrayMsgRetorno.push({texto: textoTroco});

    let voltarMenu = `*Para voltar ao menu anterior digite #*`;
    arrayMsgRetorno.push({texto:voltarMenu});

    //opcaoDigitadaTrocoDinheiro.js
    //banco.db[user].stage = 17;
    
    return arrayMsgRetorno;
}

exports.textoDinheiroTroco = textoDinheiroTroco;
