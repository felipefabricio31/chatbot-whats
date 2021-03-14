const banco = require("../../banco");

function Observacao(user, msg) {
    let arrayMsgRetorno = [];
    //OpcaoSelecionadaAlterarPedido.js
    //arrayMsgRetorno.push({stage: 13});
    
    let voltarMenu = `*Para voltar ao menu anterior digite #*`;
    arrayMsgRetorno.push({texto:voltarMenu});

    let textoPularOpcao = `*Para pular esta etapa, digite: 1*\n`;
    arrayMsgRetorno.push({texto: textoPularOpcao});

    let textoOpcaoDesejada = `*Para incluir alguma observação ao seu pedido,* \n *por exemplo, _"lanche sem salada"_ é só digitar a observação e enviar:*`;
    arrayMsgRetorno.push({texto: textoOpcaoDesejada});

    //observacaoDigitada.js
    //banco.db[user].stage = 13;
    
    return arrayMsgRetorno;
}

exports.textoObservacao = Observacao;
