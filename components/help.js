module.exports = (app, Telegraf) => {
  // Listeners without keyboard markup
  const Listeners = {
    wvSupport: {
      listen: "WV Support 🌎",
      reply:
        "💠 WorldVentures Rep Support 💠\n1-972-805-5100\nHours: 8 AM – 8 PM CST Mon – Fri\neteam@worldventures.com\n\n5100 Tennyson Parkway, Plano, TX 75024, USA"
    },
    roviaSupport: {
      listen: "Rovia/Dreamtrips 🛩",
      reply:
        "💠 Rovia/DreamTrips Support 💠\n1-972-805-5200\nsupport@rovia.com\n\nYou can call them to book/cancel flights, hotels, car rentals, cruises, or do so in the DreamTrips app."
    },
    goldSupport: {
      listen: "Gold​ ​Support 🔱",
      reply:
        "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
    },
    concierge: {
      listen: "Concierge ☎️",
      reply:
        "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
    },
    teledoc: {
      listen: "Teledoc 🤒",
      reply:
        "💠 Teledoc 💠\n1-800-835-2362\n\nNot feeling well and you don’t have time for a doctor appointment? Don’t want to wait 3 hours in urgent care for something that can be diagnosed over the phone? Talk to a real doctor via audio or video call and pick up any prescribed medications at your local pharmacy.\n\nTo set up your account online go to: www.teledoc.com\nPromo Code: “WORLD VENTURES”"
    },
    roadside: {
      listen: "Roadside Assist 🚙",
      reply:
        "💠 Roadside Assistance 💠\n1-800-214-2790\n\n24 Hour Roadside Assistance Includes...\nVehicle Towing\nLock outs\nTire Change\nJump Starts\nEtc.\non any car that you drive.\n\n3 Claims Per Year\nValue: $100 limit/claim"
    },
    evac: {
      listen: "Emergency Evac 🚁",
      reply:
        "💠 Emergency Evacuation 💠\n1-888-678-7852\n\nCall if you are seriously sick and/or injured and need to be transported back to your home country/local home hospital."
    },
    resolution: {
      listen: "ID Resolution 🔐",
      reply: "💠 ID Resolution 💠\n1-888-446-4047\n\nSelf-explanatory."
    },
    home: {
      listen: "Home 🏠"
    }
  };

  Listeners.back = {
    listen: "Back: Help ↩️",
    reply: "Help",
    keyboard: Telegraf.Extra.markup(markup =>
      markup
        .keyboard([
          [
            markup.callbackButton(Listeners.wvSupport.listen),
            markup.callbackButton(Listeners.roviaSupport.listen)
          ],
          [
            markup.callbackButton(Listeners.goldSupport.listen),
            markup.callbackButton("Platinum​ ​Support​ 👑")
          ],

          [markup.callbackButton(Listeners.home.listen)]
        ])
        .resize()
    )
  };

  Listeners.help = {
    listen: "Help 🔑",
    reply: "Help",
    keyboard: Telegraf.Extra.markup(markup =>
      markup
        .keyboard([
          [
            markup.callbackButton(Listeners.wvSupport.listen),
            markup.callbackButton(Listeners.roviaSupport.listen)
          ],
          [
            markup.callbackButton(Listeners.goldSupport.listen),
            markup.callbackButton("Platinum​ ​Support​ 👑")
          ],

          [markup.callbackButton(Listeners.home.listen)]
        ])
        .resize()
    )
  };

  Listeners.platinumSupport = {
    listen: "Platinum​ ​Support​ 👑",
    reply: "Platinum Support",
    keyboard: Telegraf.Extra.markup(markup =>
      markup
        .keyboard([
          [
            markup.callbackButton(Listeners.concierge.listen),
            markup.callbackButton(Listeners.teledoc.listen)
          ],
          [
            markup.callbackButton(Listeners.roadside.listen),
            markup.callbackButton(Listeners.evac.listen)
          ],
          [
            markup.callbackButton(Listeners.resolution.listen),
            markup.callbackButton("Back: Help ↩️")
          ]
        ])
        .resize()
    )
  };

  for (let key in Listeners) {
    const Listener = Listeners[key];
    app.hears(Listener.listen, context => {
      return context.reply(Listener.reply, Listener.keyboard).then();
    });
  }
};
