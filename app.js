const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);

app.hears("hello", ctx => {
	return ctx.reply("hello back to you");
});

app.startPolling();
