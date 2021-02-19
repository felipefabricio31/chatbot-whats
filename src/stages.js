var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./optionUser/boasVindas"),
  },
  1: {
    descricao: "Opções Selecionadas",
    obj: require("./optionUser/opcaoSelecionada"),
  },
  2: {
    descricao: "Add Produto ao carrinho",
    obj: require("./optionUser/addProdutoCarrinho"),
  },
  3: {
    descricao: "Opção Selecionada",
    obj: require("./optionUser/opcaoSelecionada"),
  },
  4: {
    descricao: "Opção Selecionada na Alteracao do Pedido",
    obj: require("./optionUser/opcaoSelecionadaAlterarPedido"),
  },
  5: {
    descricao: "Add Quantidade",
    obj: require("./optionUser/addQuantidade"),
  },
  6: {
    descricao: "Escolher Item do Menu",
    obj: require("./optionUser/escolherItemMenu"),
  },
  7: {
    descricao: "Resumo Pedido",
    obj: require("./optionUser/resumoPedido"),
  },
  8: {
    descricao: "Alterar Pedido",
    obj: require("./optionUser/alterarPedido"),
  },
  9: {
    descricao: "Agradecimentos ao Cliente",
    obj: require("./optionUser/agradecimentos"),
  },
  10: {
    descricao: "Finalizar Pedido",
    obj: require("./optionUser/finalizarPedido/finalizarPedido"),
  },
  11: {
    descricao: "Informar Endereço",
    obj: require("./optionUser/finalizarPedido/informarEndereco"),
  },
  12: {
    descricao: "Texto da Observacao do Pedido",
    obj: require("./optionUser/finalizarPedido/textoObservacaoPedido"),
  },
  13: {
    descricao: "Observacao Digitada",
    obj: require("./optionUser/finalizarPedido/observacaoDigitada"),
  },
  14: {
    descricao: "Texto Forma pagamento",
    obj: require("./optionUser/finalizarPedido/textoFormaPagamento"),
  },
  15: {
    descricao: "Forma pagamento Digitada",
    obj: require("./optionUser/finalizarPedido/formaPagamentoDigitada"),
  },
  16: {
    descricao: "Texto Troco Dinheiro",
    obj: require("./optionUser/finalizarPedido/textoTrocoDinheiro"),
  },
  17: {
    descricao: "Troco Dinheiro Digitado",
    obj: require("./optionUser/finalizarPedido/opcaoDigitadaTrocoDinheiro"),
  }
};

exports.step = stages;
