const banco = require("../../banco");

function Observacao(user, msg) {
    let arrayMsgRetorno = [];
    
    let textoOpcaoDesejada = `*Para incluir alguma observação ao seu pedido,* \n *por exemplo, _"lanche sem salada"_ é só digitar a observação e enviar:*`;
    arrayMsgRetorno.push({texto: textoOpcaoDesejada});
    
    let voltarMenu = `*Para voltar ao menu anterior digite #*`;
    arrayMsgRetorno.push({texto:voltarMenu});

    let textoPularOpcao = `*Para pular esta etapa, digite: 1*`;
    arrayMsgRetorno.push({texto: textoPularOpcao});

    return arrayMsgRetorno;
}

exports.textoObservacao = Observacao;
