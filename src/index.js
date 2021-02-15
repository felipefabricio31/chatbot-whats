// Supports ES6
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");

bot.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    );

    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      sendMessageUser("5511946460955@c.us", client, element);
      //sendMessageUser(message.from, client, element);
    }
  });
}

function getStage(user) {
  if (banco.db[user]) {
    console.log("Existe o numero no BD", banco.db[user].stage)
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    console.log("1º vez", banco.db[user].stage)

    return banco.db[user].stage;
  }
}

function sendMessageUser(user, client, msg){
  client.sendText(user, msg)
  .then((result) => {
    //console.log('Sucesso ao enviar mensagem: ', result);
  })
  .catch((erro) => {
    console.error('Erro ao enviar mensagem: ', erro);
  });
}
