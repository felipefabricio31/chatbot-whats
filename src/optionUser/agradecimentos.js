
  function agradecimentos(user, msg) {

    let fim = 
  `Tchauu!  adorei falar com você, aguardo ansioso você me chamar novamente aqui no zap, 🙃
  Quando sentir fome lembre-se de mim HAHA' I love u ♥
    
  "Estou com fome de falar com você." 
  `;    
  return [fim];
  }

  function cancelamentoPedido() {

    let fim = 
  `Nãããoo desista de mim 🥺! Volta Rita 😂...
  
  Brinks!! `;

  let fimAgradecimentos = agradecimentos();
    
  return [fim + fimAgradecimentos];
  }
  
module.exports = {agradecimentos, cancelamentoPedido};
