var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./optionUser/0"),
  },
  1: {
    descricao: "Cardapio",
    obj: require("./optionUser/1"),
  },
  2: {
    descricao: "Vendas",
    obj: require("./optionUser/2"),
  },
  3: {
    descricao: "Endereço",
    obj: require("./optionUser/3"),
  },
  // 4: {
  //   descricao: "Enceramento",
  //   obj: require("./optionUser/4"),
  // },
  // 5: {
  //   descricao: "Forma de Pagamento",
  //   obj: require("./optionUser/5"),
  // },
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
};

exports.step = stages;
