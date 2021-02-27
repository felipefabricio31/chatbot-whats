const banco = require("./banco");

function removerAcento (text)
{       
    text = text.toUpperCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    return text;                 
}

//Retorna true - campo válido
function validarQtdCaracteres (numeroCaracteres, texto)
{      
    if (texto.length < numeroCaracteres)
        return false; 

    return true;                 
}

function getStageBanco(user){
    return banco.db[user].stage;
}

function setStageBanco(user, stage){
    banco.db[user].stage = stage;
    return stage;
}



module.exports = {removerAcento, validarQtdCaracteres, getStageBanco, setStageBanco};