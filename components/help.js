module.exports = (app, Telegraf) => {
  app.hears("Help 🔑", context => {
    return context.reply("Help", help).then();
  });

  const help = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("WV Support 🌎"),
          markup.callbackButton("Rovia/Dreamtrips 🛩")
        ],
        [
          markup.callbackButton("Gold​ ​Support 🔱"),
          markup.callbackButton("Platinum​ ​Support​ 👑")
        ],

        [markup.callbackButton("Home 🏠")]
      ])
      .resize()
  );

  app.hears("WV Support 🌎", context => {
    return context
      .reply(
        "💠 WorldVentures Rep Support 💠\n1-972-805-5100\nHours: 8 AM – 8 PM CST Mon – Fri\neteam@worldventures.com\n\n5100 Tennyson Parkway, Plano, TX 75024, USA"
      )
      .then();
  });

  app.hears("Rovia/Dreamtrips 🛩", context => {
    return context
      .reply(
        "💠 Rovia/DreamTrips Support 💠\n1-972-805-5200\nsupport@rovia.com\n\nYou can call them to book/cancel flights, hotels, car rentals, cruises, or do so in the DreamTrips app."
      )
      .then();
  });

  app.hears("Gold​ ​Support 🔱", context => {
    return context
      .reply(
        "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
      )
      .then();
  });

  app.hears("Platinum​ ​Support​ 👑", context => {
    return context.reply("Platinum Support", platinum).then();
  });

  const platinum = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("Concierge ☎️"),
          markup.callbackButton("Teledoc 🤒")
        ],
        [
          markup.callbackButton("Roadside Assist 🚙"),
          markup.callbackButton("Emergency Evac 🚁")
        ],
        [
          markup.callbackButton("ID Resolution 🔐"),
          markup.callbackButton("Back: Help ↩️")
        ]
      ])
      .resize()
  );

  app.hears("Concierge ☎️", context => {
    return context
      .reply(
        "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
      )
      .then();
  });

  app.hears("Teledoc 🤒", context => {
    return context
      .reply(
        "💠 Teledoc 💠\n1-800-835-2362\n\nNot feeling well and you don’t have time for a doctor appointment? Don’t want to wait 3 hours in urgent care for something that can be diagnosed over the phone? Talk to a real doctor via audio or video call and pick up any prescribed medications at your local pharmacy.\n\nTo set up your account online go to: www.teledoc.com\nPromo Code: “WORLD VENTURES”"
      )
      .then();
  });

  app.hears("Roadside Assist 🚙", context => {
    return context
      .reply(
        "💠 Roadside Assistance 💠\n1-800-214-2790\n\n24 Hour Roadside Assistance Includes...\nVehicle Towing\nLock outs\nTire Change\nJump Starts\nEtc.\non any car that you drive.\n\n3 Claims Per Year\nValue: $100 limit/claim"
      )
      .then();
  });

  app.hears("Emergency Evac 🚁", context => {
    return context
      .reply(
        "💠 Emergency Evacuation 💠\n1-888-678-7852\n\nCall if you are seriously sick and/or injured and need to be transported back to your home country/local home hospital."
      )
      .then();
  });

  app.hears("ID Resolution 🔐", context => {
    return context
      .reply("💠 ID Resolution 💠\n1-888-446-4047\n\nSelf-explanatory.")
      .then();
  });

  app.hears("Back: Help ↩️", context => {
    return context.reply("Help", help).then();
  });
};
