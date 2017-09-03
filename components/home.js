module.exports = (app, Telegraf) => {
  /*
	* ResidualBot start command
	* @parameters text, 'welcome' keyboard markup
	*/
  app.command("/start", ctx => {
    ctx
      .reply(
        "Welcome to Team Unstoppable❗️ \n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T':\n\n1) Welcome to the team\n2) Training\n3) Travel Party\n\nClick the \" Welcome 2 Team❗️\" button below to see your first steps!",
        home
      )
      .then();
  });

  /************
  HOME MENU
	@welcometotheteam, training, travelparty, help
	*************/

  const home = Telegraf.Extra
    .markdown()
    .markup(m =>
      m
        .keyboard([
          [
            m.callbackButton("Welcome 2 Team❗️"),
            m.callbackButton("Training 🥊")
          ],
          [m.callbackButton("Travel Party 🎉"), m.callbackButton("Help 🔑")]
        ])
        .resize()
    );

  /*
	* 'Home' reply
	*/
  app.hears("Home 🏠", ctx => {
    return ctx.reply("Home", home).then();
  });
};
