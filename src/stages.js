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
};

exports.step = stages;
