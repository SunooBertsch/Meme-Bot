module.exports = (app, Telegraf) => {
  app.hears("3) Travel Party 🎉", context => {
    return context.reply("Travel Party", travelParty).then();
  });

  const travelParty = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("What's​ ​a​ ​TP? 🎊"),
          markup.callbackButton("Etiquette​ 🎩")
        ],
        [
          markup.callbackButton("How to Invite 📲"),
          markup.callbackButton("Checklist ✅")
        ],
        [markup.callbackButton("Home 🏠")]
      ])
      .resize()
  );

  app.hears("What's​ ​a​ ​TP? 🎊", context => {
    return context
      .reply(
        "A Travel Party is an event that the team holds in your house/apartment (no matter how big/small and messy/clean) where we bring together your friends and family to present to them all at the same time.\n\nThis is the launch event for your business and, trust me, everyone has one.\n\nClick the “Etiquette​ ​🎩”​ ​tab below to learn how to throw your first Travel Party launch event!",
        travelParty
      )
      .then();
  });

  app.hears("Etiquette​ 🎩", context => {
    return context.reply("Etiquette​", etiquette).then();
  });

  const etiquette = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("Edification 🗣"),
          markup.callbackButton("Before ⏪")
        ],
        [markup.callbackButton("During ▶️"), markup.callbackButton("After ⏩ ")],
        [markup.callbackButton("Back: Travel Party ↩️")]
      ])
      .resize()
  );

  app.hears("Edification 🗣", context => {
    return context
      .reply(
        "Build up your WV Family to your guests, so that your guests will see your fellow reps as important people & will listen and respect themarkup.\n\n👇 Watch QuickCoach to learn how to become a master edifier:\nhttps://youtu.be/Ca9kT4-Nxk0"
      )
      .then();
  });

  app.hears("Before ⏪", context => {
    return context
      .reply(
        "Guests may feel awkward coming into the TP, so there are some things you can do to keep them from feeling weird. Guests are more likely to make a decision when they’re comfortable!\n\n👇 Watch QuickCoach to learn how to prep before the Presentation:\nhttps://youtu.be/Ezk3vmHqX3c"
      )
      .then();
  });

  app.hears("During ▶️", context => {
    return context
      .reply(
        "You’ve got your guests in the seat! Now it’s time to make sure they have a fair chance of seeing the information properly!\n\n👇 Watch QuickCoach to learn how to prep before the Presentation:\nhttps://youtu.be/Ezk3vmHqX3c"
      )
      .then();
  });

  app.hears("After ⏩", context => {
    return context
      .reply(
        "The presentation is over! Now it’s time to collect decision, not excuses! On top of having your applications ready, there’s some techniques in making APP TIME smooth and awkward free for everyone!\n\n👇Watch QuickCoach to learn how to be a pro closer:\nhttps://youtu.be/LhAaKBjs9n4"
      )
      .then();
  });

  app.hears("Back: Travel Party ↩️", context => {
    return context.reply("Back", travelParty).then();
  });

  app.hears("How to Invite 📲", context => {
    return context.reply("How to Invite", howToInvite).then();
  });

  const howToInvite = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("Make a List 📝"),
          markup.callbackButton("FLYE Card ❇️")
        ],
        [
          markup.callbackButton("Close Friends/Fam ❤️"),
          markup.callbackButton("Acquaintances 💛")
        ],
        [
          markup.callbackButton("Strangers 🖤"),
          markup.callbackButton("Back: Travel Party ↩️")
        ]
      ])
      .resize()
  );

  app.hears("Make a List 📝", context => {
    return context.reply("Making a List", makeAList).then();
  });

  const makeAList = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("1) Make a List 📝"),
          markup.callbackButton("2) Inviting Basics 📞")
        ],
        [markup.callbackButton("Back: How To Invite ↩️")]
      ])
      .resize()
  );

  app.hears("1) Make a List 📝", context => {
    return context
      .reply(
        "First things first---MAKE YOUR LIST! Once you create your list, have it with you at ALL times, so you’ll be able to add to it whenever you meet someone new!\n\n👇 Watch QuickCoach to learn how to master your list:\nhttps://youtu.be/Se3EZ_ZYLWA"
      )
      .then();
  });

  app.hears("2) Inviting Basics 📞", context => {
    return context
      .reply(
        "The close starts in the invite! If you don’t effectively invite people to see the information, your business won’t grow!\n\nNote: Always make sure your friend/family member knows you’re going to be sharing something with themarkup. You never want to mislead anyone.\n\n👇 Watch QuickCoach to learn how to be a Master Inviter:\nhttps://youtu.be/ozUvHrKvn1g"
      )
      .then();
  });

  app.hears("Back: How To Invite ↩️", context => {
    return context.reply("How to Invite", howToInvite).then();
  });

  app.hears("FLYE Card ❇️", context => {
    return context
      .reply(
        'STEP 1:​\nYou - “Hey Bob! Trust all is well! I got an important question for you...”\n​Bob - “What’s up?”\n\nSTEP 2:​\nYou - “Have you seen this yet!!?”\n 👉 INSERT FLYE CARD GIF\nBob - "No... what\'s that?"\n\nSTEP 3:​ \nYou - “I got early access!! We got to talk before this thing goes viral!!\nYou free today to grab coffee real quick?”\n\n📲 For more options, go to “Step 5” in the “Flye” Section from the ChillinWW App.\nPassword: boomer1\n\n🚫 Make sure the pic you are sending does NOT include the word “FLYE” on it.\n\n👇FLYE CARD GIF\nhttps://giphy.com/gifs/3ohhwDzkVqbnWkEfUQ'
      )
      .then();
  });

  app.hears("Close Friends/Fam ❤️", context => {
    return context.reply("Close Friends/Family", closeFriendsAndFamily).then();
  });

  const closeFriendsAndFamily = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("2 Step Text 📲"),
          markup.callbackButton("TP Text 🎊")
        ],
        [markup.callbackButton("Back: How To Invite ↩️")]
      ])
      .resize()
  );

  app.hears("2 Step Text 📲", context => {
    return context
      .reply(
        "Make things natural and easy! If you’re used to texting your closest friends/family, then this is the perfect format to go about the invite!\n\n👇 Watch QuickCoach to learn how to text properly:\nhttps://youtu.be/X1j5yvnkA6U"
      )
      .then();
  });

  app.hears("TP Text 🎊", context => {
    return context
      .reply(
        "Getting your friends and family to a TP is a little different. You’re inviting them to your house/apartment at a specific time, so you want to stay in control.\n\n👇 Watch QuickCoach to learn how to get the butts in the seats:\nhttps://youtu.be/_LbGpUMnv3I"
      )
      .then();
  });

  app.hears("Acquaintances 💛", context => {
    return context
      .reply(
        "Have friends/family who you haven’t spoken to in forever? Don’t worry! We got that invite covered too!! Some of our best members/reps have joined because an old friend had the guts to invite them as well.\n\n👇 Learn from NMD David Townsend---the master of lukewarm market:\nhttps://youtu.be/buWUxDs2_Sw"
      )
      .then();
  });

  app.hears("Strangers 🖤", context => {
    return context
      .reply(
        "If you haven’t finished your list of Close Friends/Family or Acquaintances, go back and invite them out! The key to building your business is trust​.\n\nMake the stranger into a friend first before inviting them to see your WV baby!"
      )
      .then();
  });

  app.hears("Checklist ✅", context => {
    return context.reply("Checklist", checklist).then();
  });

  const checklist = Telegraf.Extra.markup(markup =>
    markup
      .keyboard([
        [
          markup.callbackButton("Checklist ✔️"),
          markup.callbackButton("Presentation 💻")
        ],
        [markup.callbackButton("Back: Travel Party ↩️")]
      ])
      .resize()
  );

  app.hears("Checklist ✔️", context => {
    return context
      .reply(
        "KEEP IT SIMPLE & DUPLICATABLE\n\n✅ Music--before & after prez. Keep it clean, loud & upbeat! You can find the TP Mix in the “Audios” section of the ChillinWW App.\n❇️  Printed Applications--Enough for all guests! You can find them at\nwww.chillinworldwide.com➡️ Documents➡️ Product App\n❇️ Printed Income Disclosure Statements--Enough for all of your guests! You can find them at www.chillinworldwide.com➡️Documents➡️IDS\n✅ Updated Presentation--Downloaded to Smart TV/Laptop\n✅ Technology--test all tech at least 3hrs prior to starting\n✅ Seating--facing away from the doorway\n✅ Snacks--simple chips/dip & water. No elaborate meals!"
      )
      .then();
  });

  app.hears("Presentation 💻", context => {
    return context
      .reply(
        "FLYE Presentation to share with prospects:\nLink: https://vimeo.com/228471923\nPassword: iwantone\n\n❌ Do NOT share the downloadable link below for exposures.\nThis is just for reps to download for convenience!!\n\n**Downloadable Link: http://bit.ly/2ubCZOz ❌"
      )
      .then();
  });
};
