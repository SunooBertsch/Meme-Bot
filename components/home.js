module.exports = (app, Telegraf) => {
  const Listeners = {
    start: {
      listen: "/start",
      reply:
        "Welcome to Team Unstoppable❗️ \n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T':\n\n1) Welcome to the team\n2) Training\n3) Travel Party\n\nClick the \" Welcome 2 Team❗️\" button below to see your first steps!"
    },
    welcome: { listen: "1) Welcome 2 Team❗️" },
    training: { listen: "2) Training 🥊" },
    travelParty: { listen: "3) Travel Party 🎉" },
    help: { listen: "Help 🔑" },
    home: { listen: "Home 🏠", reply: "Home" }
  };

  Listeners.home.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.welcome.listen),
          markup.callbackButton(Listeners.training.listen)
        ],
        [
          markup.callbackButton(Listeners.travelParty.listen),
          markup.callbackButton(Listeners.help.listen)
        ]
      ])
      .resize()
  );

  app.command(Listeners.start.listen, context => {
    context.reply(Listeners.start.reply, Listeners.home.keyboard).then();
  });

  app.hears(Listeners.home.listen, context => {
    return context.reply(Listeners.home.reply, Listeners.home.keyboard).then();
  });
};
