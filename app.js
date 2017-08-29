const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);

const menu = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      m.callbackButton("Welcome to the Team", "welcome"),
      m.callbackButton("Training", "training"),
      m.callbackButton("Travel Party", "party"),
      m.callbackButton("Help", "help")
    ])
  );
app.on("text", ctx => {
  return ctx
    .reply(
      "Welcome to Team Unstoppable!\n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T'\n1) Welcome to the team\n\n2) Training\n\n 3) Travel Party\n\nClick the 'Welcome to the Team' button below to see your first steps!",
      menu
    )
    .then(() => {});
});
app.startPolling();
