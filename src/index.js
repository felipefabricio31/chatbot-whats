// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");

bot.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage("5511946460955@c.us")].obj.execute(
      "5511946460955@c.us",
      message.body,
      message.sender.name
    );

    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      
      client.sendText("5511946460955@c.us", element)
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