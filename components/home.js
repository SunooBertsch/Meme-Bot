module.exports = (app, Telegraf) => {
  const Listeners = {
    start: "/start",
    welcome: "1) Welcome 2 Team❗️",
    training: "2) Training 🥊",
    travelParty: "3) Travel Party 🎉",
    help: "Help 🔑",
    home: "Home 🏠"
  };

  app.command(Listeners.start, context => {
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
          markup.callbackButton(Listeners.welcome),
          markup.callbackButton(Listeners.training)
        ],
        [
          markup.callbackButton(Listeners.travelParty),
          markup.callbackButton(Listeners.help)
        ]
      ])
      .resize()
  );

  app.hears(Listeners.home, context => {
    return context.reply("Home", home).then();
  });
};
