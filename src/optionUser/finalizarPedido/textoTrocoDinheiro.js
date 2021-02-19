const banco = require("../../banco");

function textoDinheiroTroco(user, msg) {
    let textoTroco = `*- Troco pra quanto?*\n\n`;

    textoTroco += "\n----------------------------------------------\n";

    textoTroco += `*- Deseja voltar ao menu anterior❓*
    Digite: *#* \n`;

    //opcaoDigitadaTrocoDinheiro.js
    banco.db[user].stage = 17;
    
    return [textoTroco];
}

exports.textoDinheiroTroco = textoDinheiroTroco;
