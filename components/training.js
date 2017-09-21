module.exports = (app, Telegraf) => {
  const Listeners = {
    training: { listen: "2) Training 🥊", reply: "Training" },
    events: {
      listen: "Events 🏋️",
      reply:
        "Learners are earners!\n\nTraining events are a HUGE piece to the WV success formula, and the best part is we’re learning from the best of the best in our company who teach us EXACTLY how they reached the top ranks in the company. There has never been a rep that has had big, long-lasting success in this company without trainings.\n\nRegister for the next training event now before it sells out!\nwveventreg.com\nwveventreg.com\nwveventreg.com"
    },
    audio: {
      listen: "Audios 🎧",
      reply:
        "Start feeding your brain before one of the big events by listening to audios in the...\n\n💠 ChillinWW App 💠\nHead over to the “Audios” section in the ChillinWW App for FREE audio experience by your Top Leaders in WV!\n\n💠 Advantage Lite 💠\nTake your listening to the next level!! For only $5.99/mo, you’ll gain access to a handful of audios by our top leaders, the E-Version of our recent Voyager Magazines, AND be invited to The Secret Advantage FB Group---where top leaders go LIVE!!\n\n✅ Sign-up in your BackOffice (domain.worldventures.biz)\n\n💠 Advantage 💠\nThe more you invest, the more you’ll gain. Unlock the entire WV Library of Audios and Video by your top leaders & amazing speakers from around the world! For $19.99/mo, you’ll also have 3 Audio CD’s, Voyager, and Success Magazines mailed out to you. Worth it!\n\n✅ Sign-up in your BackOffice (domain.worldventures.biz)"
    },
    home: { listen: "Home 🏠" }
  };

  Listeners.training.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.events.listen),
          markup.callbackButton(Listeners.audio.listen)
        ],
        [markup.callbackButton(Listeners.home.listen)]
      ])
      .resize()
  );

  for (let key in Listeners) {
    const Listener = Listeners[key];
    app.hears(Listener.listen, context => {
      return context.reply(Listener.reply, Listener.keyboard).then();
    });
  }
};
