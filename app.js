const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);

const menu = Telegraf.Extra
  .markdown()
  .markup(m => m.keyboard([m.callbackButton("Button", "button")]));
app.on("text", ctx => {
  return ctx.reply("Button:", menu).then(() => {});
});
app.startPolling();
