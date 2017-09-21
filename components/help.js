module.exports = (app, Telegraf) => {
  const Listeners = {
    help: "Help 🔑",
    wvSupport: "WV Support 🌎",
    roviaSupport: "Rovia/Dreamtrips 🛩",
    goldSupport: "Gold​ ​Support 🔱",
    platinumSupport: "Platinum​ ​Support​ 👑",
    concierge: "Concierge ☎️",
    teledoc: "Teledoc 🤒",
    roadside: "Roadside Assist 🚙",
    evac: "Emergency Evac 🚁",
    resolution: "ID Resolution 🔐",
    back: "Back: Help ↩️",
    home: "Home 🏠"
  };

  app.hears(Listeners.help, context => {
    return context.reply("Help", help).then();
  });

  const help = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.wvSupport),
          markup.callbackButton(Listeners.roviaSupport)
        ],
        [
          markup.callbackButton(Listeners.goldSupport),
          markup.callbackButton(Listeners.platinumSupport)
        ],

        [markup.callbackButton(Listeners.home)]
      ])
      .resize()
  );

  app.hears(Listeners.wvSupport, context => {
    return context
      .reply(
        "💠 WorldVentures Rep Support 💠\n1-972-805-5100\nHours: 8 AM – 8 PM CST Mon – Fri\neteam@worldventures.com\n\n5100 Tennyson Parkway, Plano, TX 75024, USA"
      )
      .then();
  });

  app.hears(Listeners.roviaSupport, context => {
    return context
      .reply(
        "💠 Rovia/DreamTrips Support 💠\n1-972-805-5200\nsupport@rovia.com\n\nYou can call them to book/cancel flights, hotels, car rentals, cruises, or do so in the DreamTrips app."
      )
      .then();
  });

  app.hears(Listeners.goldSupport, context => {
    return context
      .reply(
        "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
      )
      .then();
  });

  app.hears(Listeners.platinumSupport, context => {
    return context.reply("Platinum Support", platinum).then();
  });

  const platinum = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.concierge),
          markup.callbackButton(Listeners.teledoc)
        ],
        [
          markup.callbackButton(Listeners.roadside),
          markup.callbackButton(Listeners.evac)
        ],
        [
          markup.callbackButton(Listeners.resolution),
          markup.callbackButton(Listeners.back)
        ]
      ])
      .resize()
  );

  app.hears(Listeners.concierge, context => {
    return context
      .reply(
        "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
      )
      .then();
  });

  app.hears(Listeners.teledoc, context => {
    return context
      .reply(
        "💠 Teledoc 💠\n1-800-835-2362\n\nNot feeling well and you don’t have time for a doctor appointment? Don’t want to wait 3 hours in urgent care for something that can be diagnosed over the phone? Talk to a real doctor via audio or video call and pick up any prescribed medications at your local pharmacy.\n\nTo set up your account online go to: www.teledoc.com\nPromo Code: “WORLD VENTURES”"
      )
      .then();
  });

  app.hears(Listeners.roadside, context => {
    return context
      .reply(
        "💠 Roadside Assistance 💠\n1-800-214-2790\n\n24 Hour Roadside Assistance Includes...\nVehicle Towing\nLock outs\nTire Change\nJump Starts\nEtc.\non any car that you drive.\n\n3 Claims Per Year\nValue: $100 limit/claim"
      )
      .then();
  });

  app.hears(Listeners.evac, context => {
    return context
      .reply(
        "💠 Emergency Evacuation 💠\n1-888-678-7852\n\nCall if you are seriously sick and/or injured and need to be transported back to your home country/local home hospital."
      )
      .then();
  });

  app.hears(Listeners.resolution, context => {
    return context
      .reply("💠 ID Resolution 💠\n1-888-446-4047\n\nSelf-explanatory.")
      .then();
  });

  app.hears(Listeners.back, context => {
    return context.reply("Help", help).then();
  });
};
