module.exports = (app, Telegraf) => {
  app.command("/start", context => {
    context
      .reply(
        "Welcome to Team Unstoppable❗️ \n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T':\n\n1) Welcome to the team\n2) Training\n3) Travel Party\n\nClick the \" Welcome 2 Team❗️\" button below to see your first steps!",
        home
      )
      .then();
  });

  const home = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("1) Welcome 2 Team❗️"),
          markup.callbackButton("2) Training 🥊")
        ],
        [
          markup.callbackButton("3) Travel Party 🎉"),
          markup.callbackButton("Help 🔑")
        ]
      ])
      .resize()
  );

  app.hears("Home 🏠", context => {
    return context.reply("Home", home).then();
  });
};
