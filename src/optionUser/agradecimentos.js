const infoCliente = require("../informacoesCliente");

function agradecimentos(user, msg) {

let fim = 
`Tchauu!  Adorei falar com você, aguardo ansioso você me chamar novamente, 🙃
Quando sentir fome lembre-se de mim HAHA' I love u ♥
  
*"Estou com fome de falar com você."* 

A ${infoCliente.info.NOME_CLIENTE} agradece à preferência e até breve 😘.

`;    
return fim;
}

function cancelamentoPedido() {

  let fim = 
`Nãããoo desista de mim 🥺! Volta Rita 😂...

Brinks!! `;

  let fimAgradecimentos = agradecimentos();
    
  return fim + fimAgradecimentos;
}
  
module.exports = {agradecimentos, cancelamentoPedido};
