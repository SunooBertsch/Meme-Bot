const Telegraf = require("telegraf");
const { Markup } = require("telegraf");
const axios = require("axios"); // add axios
const keys = require("./keys");

const app = new Telegraf(keys.clientID);

app.hears("hello", ctx => {
	return ctx.reply("hello back to you");
});

// handle the reaction everytime user sends a text message
app.on("text", ctx => {
	// ctx object holds the Update object from Telegram API
	// So you can use everything you see there

	// get the text message sent by user
	const subreddit = ctx.message.text;

	// GET the data from Reddit API
	axios
		.get(`https://reddit.com/r/${subreddit}/top.json?limit=10`)
		.then(res => {
			// data recieved from Reddit
			const data = res.data.data;

			// if subbreddit does not exist
			if (data.children.length < 1)
				return ctx.reply("The subreddit couldn't be found.");

			// send the first top post link to the user
			const link = `https://reddit.com/${data.children[0].data.permalink}`;
			// new response, with inline buttons
			return ctx.reply(
				link,
				Markup.inlineKeyboard([
					// first argument is button's text
					// second argument is callback text
					Markup.callbackButton("➡️ Next", subreddit)
				]).extra()
			);
		})
		// if there's any error in request
		.catch(err => console.log(err));
});

let state = {};

app.command("top", ctx => {
	const userId = ctx.message.from.id;

	// if user id does not exist create one
	if (!state[userId]) state[userId] = { id: userId };

	// save/update user last command
	state[userId].command = "top";
	return ctx.replyWithMarkdown(`Enter a subreddit name to get *top* posts.`);
});

app.command("hot", ctx => {
	const userId = ctx.message.from.id;
	if (!state[userId]) state[userId] = { id: userId };
	state[userId].command = "hot";
	return ctx.replyWithMarkdown("Enter a subreddit name to get *hot* posts.");
});

app.startPolling();
