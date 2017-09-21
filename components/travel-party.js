module.exports = (app, Telegraf) => {
  const Listeners = {
    travelParty: {
      listen: "3) Travel Party 🎉",
      reply: "Travel Party"
    },
    whatTP: {
      listen: "What's​ ​a​ ​TP? 🎊",
      reply:
        "A Travel Party is an event that the team holds in your house/apartment (no matter how big/small and messy/clean) where we bring together your friends and family to present to them all at the same time.\n\nThis is the launch event for your business and, trust me, everyone has one.\n\nClick the “Etiquette​ ​🎩”​ ​tab below to learn how to throw your first Travel Party launch event!"
    },
    etiquette: {
      listen: "Etiquette​ 🎩",
      reply: "Etiquette​"
    },
    edification: {
      listen: "Edification 🗣",
      reply:
        "Build up your WV Family to your guests, so that your guests will see your fellow reps as important people & will listen and respect themarkup.\n\n👇 Watch QuickCoach to learn how to become a master edifier:\nhttps://youtu.be/Ca9kT4-Nxk0"
    },
    howToInvite: {
      listen: "How to Invite 📲",
      reply: "How to Invite"
    },
    before: {
      listen: "Before ⏪",
      reply:
        "Guests may feel awkward coming into the TP, so there are some things you can do to keep them from feeling weird. Guests are more likely to make a decision when they’re comfortable!\n\n👇 Watch QuickCoach to learn how to prep before the Presentation:\nhttps://youtu.be/Ezk3vmHqX3c"
    },
    during: {
      listen: "During ▶️",
      reply:
        "You’ve got your guests in the seat! Now it’s time to make sure they have a fair chance of seeing the information properly!\n\n👇 Watch QuickCoach to learn how to prep before the Presentation:\nhttps://youtu.be/Ezk3vmHqX3c"
    },
    after: {
      listen: "After ⏩",
      reply:
        "The presentation is over! Now it’s time to collect decision, not excuses! On top of having your applications ready, there’s some techniques in making APP TIME smooth and awkward free for everyone!\n\n👇Watch QuickCoach to learn how to be a pro closer:\nhttps://youtu.be/LhAaKBjs9n4"
    },
    flye: {
      listen: "FLYE Card ❇️",
      reply:
        'STEP 1:​\nYou - “Hey Bob! Trust all is well! I got an important question for you...”\n​Bob - “What’s up?”\n\nSTEP 2:​\nYou - “Have you seen this yet!!?”\n 👉 INSERT FLYE CARD GIF\nBob - "No... what\'s that?"\n\nSTEP 3:​ \nYou - “I got early access!! We got to talk before this thing goes viral!!\nYou free today to grab coffee real quick?”\n\n📲 For more options, go to “Step 5” in the “Flye” Section from the ChillinWW App.\nPassword: boomer1\n\n🚫 Make sure the pic you are sending does NOT include the word “FLYE” on it.\n\n👇FLYE CARD GIF\nhttps://giphy.com/gifs/3ohhwDzkVqbnWkEfUQ'
    },
    fam: {
      listen: "Close Friends/Fam ❤️",
      reply: "Close Friends/Family"
    },
    acquaintances: {
      listen: "Acquaintances 💛",
      reply:
        "Have friends/family who you haven’t spoken to in forever? Don’t worry! We got that invite covered too!! Some of our best members/reps have joined because an old friend had the guts to invite them as well.\n\n👇 Learn from NMD David Townsend---the master of lukewarm market:\nhttps://youtu.be/buWUxDs2_Sw"
    },
    strangers: {
      listen: "Strangers 🖤",
      reply:
        "If you haven’t finished your list of Close Friends/Family or Acquaintances, go back and invite them out! The key to building your business is trust​.\n\nMake the stranger into a friend first before inviting them to see your WV baby!"
    },
    checklist: { listen: "Checklist ✅", reply: "Checklist" },
    checklistInner: {
      listen: "Checklist ✔️",
      reply:
        "KEEP IT SIMPLE & DUPLICATABLE\n\n✅ Music--before & after prez. Keep it clean, loud & upbeat! You can find the TP Mix in the “Audios” section of the ChillinWW App.\n❇️  Printed Applications--Enough for all guests! You can find them at\nwww.chillinworldwide.com➡️ Documents➡️ Product App\n❇️ Printed Income Disclosure Statements--Enough for all of your guests! You can find them at www.chillinworldwide.com➡️Documents➡️IDS\n✅ Updated Presentation--Downloaded to Smart TV/Laptop\n✅ Technology--test all tech at least 3hrs prior to starting\n✅ Seating--facing away from the doorway\n✅ Snacks--simple chips/dip & water. No elaborate meals!"
    },
    presentation: {
      listen: "Presentation 💻",
      reply:
        "FLYE Presentation to share with prospects:\nLink: https://vimeo.com/228471923\nPassword: iwantone\n\n❌ Do NOT share the downloadable link below for exposures.\nThis is just for reps to download for convenience!!\n\n**Downloadable Link: http://bit.ly/2ubCZOz ❌"
    },
    list: {
      listen: "Make a List 📝",
      reply: "Making a List"
    },
    listStepOne: {
      listen: "1) Make a List 📝",
      reply:
        "First things first---MAKE YOUR LIST! Once you create your list, have it with you at ALL times, so you’ll be able to add to it whenever you meet someone new!\n\n👇 Watch QuickCoach to learn how to master your list:\nhttps://youtu.be/Se3EZ_ZYLWA"
    },
    listStepTwo: {
      listen: "2) Inviting Basics 📞",
      reply:
        "The close starts in the invite! If you don’t effectively invite people to see the information, your business won’t grow!\n\nNote: Always make sure your friend/family member knows you’re going to be sharing something with themarkup. You never want to mislead anyone.\n\n👇 Watch QuickCoach to learn how to be a Master Inviter:\nhttps://youtu.be/ozUvHrKvn1g"
    },
    twoStepText: {
      listen: "2 Step Text 📲",
      reply:
        "Make things natural and easy! If you’re used to texting your closest friends/family, then this is the perfect format to go about the invite!\n\n👇 Watch QuickCoach to learn how to text properly:\nhttps://youtu.be/X1j5yvnkA6U"
    },
    backTP: {
      listen: "Back: Travel Party ↩️",
      reply: "Back"
    },
    tpText: {
      listen: "TP Text 🎊",
      reply:
        "Getting your friends and family to a TP is a little different. You’re inviting them to your house/apartment at a specific time, so you want to stay in control.\n\n👇 Watch QuickCoach to learn how to get the butts in the seats:\nhttps://youtu.be/_LbGpUMnv3I"
    },
    backToInvite: {
      listen: "Back: How To Invite ↩️",
      reply: "How to Invite"
    },
    home: { listen: "Home 🏠" }
  };

  Listeners.fam.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.twoStepText.listen),
          markup.callbackButton(Listeners.tpText.listen)
        ],
        [markup.callbackButton(Listeners.backToInvite.listen)]
      ])
      .resize()
  );

  Listeners.backToInvite.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.list.listen),
          markup.callbackButton(Listeners.flye.listen)
        ],
        [
          markup.callbackButton(Listeners.fam.listen),
          markup.callbackButton(Listeners.acquaintances.listen)
        ],
        [
          markup.callbackButton(Listeners.strangers.listen),
          markup.callbackButton(Listeners.backTP.listen)
        ]
      ])
      .resize()
  );

  Listeners.backTP.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.whatTP.listen),
          markup.callbackButton("Etiquette​ 🎩")
        ],
        [
          markup.callbackButton(Listeners.howToInvite.listen),
          markup.callbackButton(Listeners.checklist.listen)
        ],
        [markup.callbackButton(Listeners.home.listen)]
      ])
      .resize()
  );

  Listeners.etiquette.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.edification.listen),
          markup.callbackButton(Listeners.before.listen)
        ],
        [
          markup.callbackButton(Listeners.during.listen),
          markup.callbackButton(Listeners.after.listen)
        ],
        [markup.callbackButton(Listeners.travelParty.listen)]
      ])
      .resize()
  );

  Listeners.howToInvite.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.list.listen),
          markup.callbackButton(Listeners.flye.listen)
        ],
        [
          markup.callbackButton(Listeners.fam.listen),
          markup.callbackButton(Listeners.acquaintances.listen)
        ],
        [
          markup.callbackButton(Listeners.strangers.listen),
          markup.callbackButton(Listeners.backTP.listen)
        ]
      ])
      .resize()
  );

  Listeners.travelParty.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.whatTP.listen),
          markup.callbackButton(Listeners.etiquette.listen)
        ],
        [
          markup.callbackButton(Listeners.howToInvite.listen),
          markup.callbackButton(Listeners.checklist.listen)
        ],
        [markup.callbackButton(Listeners.home.listen)]
      ])
      .resize()
  );

  Listeners.list.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.listStepOne.listen),
          markup.callbackButton(Listeners.listStepTwo.listen)
        ],
        [markup.callbackButton(Listeners.backToInvite.listen)]
      ])
      .resize()
  );

  Listeners.checklist.keyboard = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton(Listeners.checklistInner.listen),
          markup.callbackButton(Listeners.presentation.listen)
        ],
        [markup.callbackButton(Listeners.backTP.listen)]
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


