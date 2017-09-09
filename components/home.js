module.exports = (app, Telegraf) => {
  app.command("/start", ctx => {
    ctx
      .reply(
        "Welcome to Team Unstoppable❗️ \n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T':\n\n1) Welcome to the team\n2) Training\n3) Travel Party\n\nClick the \" Welcome 2 Team❗️\" button below to see your first steps!",
        home
      )
      .then();
  });

  const home = Telegraf.Extra
    .markdown()
    .markup(m =>
      m
        .keyboard([
          [
            m.callbackButton("1) Welcome to the team❗"),
            m.callbackButton("2) Training 🥊")
          ],
          [m.callbackButton("3) Travel Party 🎉"), m.callbackButton("Help 🔑")]
        ])
        .resize()
    );

  app.hears("Home 🏠", ctx => {
    return ctx.reply("Home", home).then();
  });
};
