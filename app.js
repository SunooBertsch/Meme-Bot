const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);
// const { Extra, Markup } = require("telegraf");

// app.on("text", ctx => {
//   ctx.reply(":)", Extra.markup(m => m.removeKeyboard()));
// });

/*
* ResidualBot start command
* @parameters text, 'welcome' keyboard markup
*/
app.command("/start", ctx => {
  return ctx
    .reply(
      `💠 Welcome to Team Unstoppable! 💠 \n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T':\n\n1) Welcome to the team\n2) Training\n3) Travel Party\n\nClick the "*Welcome to the Team*🤗" button below to see your first steps!`,
      home
    )
    .then();
});

/************
  HOME MENU
@welcometotheteam, training, travelparty, help
*************/

const home = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [
        m.callbackButton("Welcome To The Team 🤗"),
        m.callbackButton("Training 🥊")
      ],
      [m.callbackButton("Travel Party 🎉"), m.callbackButton("Help 🔑")]
    ])
  );

/*
* 'Home' reply
*/
app.hears("Home 🏠", ctx => {
  return ctx.reply("Home", home).then();
});

/*
* 'Welcome To The Team 🤗' reply
** @DIRECT TO 'TEAM RESOURCES'
*/
app.hears("Welcome To The Team 🤗", ctx => {
  return ctx.reply("Team Resources", teamResources).then();
});

/*
* 'Training 🥊' reply
** @DIRECT TO 'TRAINING'
*/
app.hears("Training 🥊", ctx => {
  return ctx.reply("Training", training).then();
});

/*
* 'Travel Party 🎉' reply
** @DIRECT TO 'TRAVEL PARTY'
*/
app.hears("Travel Party 🎉", ctx => {
  return ctx.reply("Travel Party", travelParty).then();
});

/*
* 'Help' reply
** @DIRECT TO 'HELP'
*/
// app.hears("Help 🔑", ctx => {
//   return ctx.reply("Help", help).then();
// });

/*********************
  Team Resources Menu
@teamchats, teamapps, facebook groups, home
*********************/

const teamResources = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [m.callbackButton("Team Chats 👫"), m.callbackButton("Team Apps 📱")],
      [m.callbackButton("Facebook Groups 🌎"), m.callbackButton("Home 🏠")]
    ])
  );

/*
* 'Team Chats' reply
*/
app.hears("Team Chats 👫", ctx => {
  return ctx
    .reply(
      "💠 Team Unstoppable Channel 💠 \n Big training events, team calls, team bonding, rank recognition will be announced here. Pay attention to this page as much as possible.\n\n✅ Add business reps ONLY to this channel!\nClick the link below to join now!\n t.me/UnstoppableChannel\n\n💠 Team Unstoppable Chat 💠 \n A group chat to stay plugged in to our team members from around the world! Welcome your new teammates, post travel parties, and recognize new ranks here, too.\n\n ✅ Add business reps ONLY to this chat! \n Click the link below to join now! \n t.me/UnstoppableGroupChat"
    )
    .then();
});

/*
* 'Team Apps' reply
*/
app.hears("Team Apps 📱", ctx => {
  return ctx
    .reply(
      "💠 Dreamtrips 💠\nUser ID and password have been emailed to you. Set up your profile picture and start booking your first DreamTrip!\n\n💠 ChillinWW (ChillinWorldWide) 💠\nThis app has EVERYTHING you need for success in WorldVentures aside from your mentors! Plug in to the QuickCoach videos, Flye SmartCard (password: boomer1), or Audios from any of our top leaders."
    )
    .then();
});

/*
* 'Facebook Groups' reply
*/
app.hears("Facebook Groups 🌎", ctx => {
  return ctx
    .reply(
      "💠 Team Unstoppable FB Group 💠 \nThe main Facebook page where we connect with ALL Unstoppable teammates and where IMDs Tere and Mary Kampe and other leaders welcome new teammates and post about huge company updates and events. \n\n ✅ Add business reps ONLY to this group! \n\n 💠 Funstoppable FB Group 💠 \nWhere all Unstoppable Dreamtrips members come together and share stories about their experiences with all things DreamTrips (trip, DreamTrips Local, Price Pledge, etc. testimonials). This is not a Facebook page about business, so no “Welcome to the Team” posts or anything business related here!\n\n✅ Add EVERYONE to this group!"
    )
    .then();
});

/*********************
  TRAINING Menu
@teamchats, teamapps, facebook groups, home
*********************/

const training = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [m.callbackButton("Events 🏋️"), m.callbackButton("Audios 🎧")],
      [m.callbackButton("Home 🏠")]
    ])
  );

/*
* 'Events' reply
*/
app.hears("Events 🏋️", ctx => {
  return ctx
    .reply(
      "Learners are earners! Training events are a HUGE piece to the WV success formula, and the best part is we’re learning from the best of the best in our company who teach us EXACTLY how they reached the top ranks in the company. We’re going to be completely honest here: we’ve never met a rep that has had big, long-lasting success in this company without trainings.\n\nRegister for the next training event now before it sells out!\nwveventreg.com\nwveventreg.com\nwveventreg.com"
    )
    .then();
});

/*
* 'Audios' reply
*/
app.hears("Audios 🎧", ctx => {
  return ctx
    .reply(
      "Start feeding your brain before one of our big events by listening to audios in the...\n\n💠 ChillinWW App 💠\nHead over to the “Audios” section in the ChillinWW App for FREE audio experience by your Top Leaders in WV!\n\n💠 Advantage Lite 💠\nTake your listening to the next level!! For only $5.99/mo, you’ll gain access to a handful of audios by our top leaders, the E-Version of our recent Voyager Magazines, AND be invited to The Secret Advantage FB Group---where top leaders go LIVE!!\n\n✅ Sign-up in your BackOffice (domain.worldventures.biz)\n\n💠 Advantage 💠\nThe more you invest, the more you’ll gain. Unlock the entire WV Library of Audios and Video by your top leaders & amazing speakers from around the world! For $19.99/mo, you’ll also have 3 Audio CD’s, Voyager, and Success Magazines mailed out to you. Worth it!\n\n✅ Sign-up in your BackOffice (domain.worldventures.biz)"
    )
    .then();
});

/*********************
  TRAVEL PARTY Menu
@whats a tp, etiquette, how to invite, checklist, home
*********************/

const travelParty = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [
        m.callbackButton("What's​ ​a​ ​TP 🎊?​"),
        m.callbackButton("Etiquette​ 🎩")
      ],
      [m.callbackButton("How to Invite 📲"), m.callbackButton("Checklist ✅")],
      [m.callbackButton("Home 🏠")]
    ])
  );

/*
* 'Travel Party' reply
*/
app.hears("What's​ ​a​ ​TP 🎊?​", ctx => {
  return ctx
    .reply(
      "A Travel Party is an event that we hold in your house/apartment (no matter how big/small and messy/clean) where we bring together your friends and family to present to them all at the same time.\n\nThis is the launch event for your business and, trust me, everyone has one.\n\nClick the “Etiquette​ ​🎩”​ ​tab below to learn how to throw your first Travel Party launch event!",
      travelParty
    )
    .then();
});

/*
* 'Etiquette​ 🎩' reply
* DIRECT@ TO ETIQUETTE MENU
*/
app.hears("Etiquette​ 🎩", ctx => {
  return ctx
    .reply(
      "A Travel Party is an event that we hold in your house/apartment (no matter how big/small and messy/clean) where we bring together your friends and family to present to them all at the same time.\n\nThis is the launch event for your business and, trust me, everyone has one.\n\nClick the “Etiquette​ ​🎩”​ ​tab below to learn how to throw your first Travel Party launch event!",
      etiquette
    )
    .then();
});

/*********************
  ETIQUETTE Menu
@wv support, rovia/dreamtrips, goldsupport, platinum support, home
*********************/

const etiquette = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [m.callbackButton("Edification 🗣"), m.callbackButton("Before ⏪")],
      [m.callbackButton("During ▶️"), m.callbackButton("After ⏩ ")],
      [m.callbackButton("Back ↩️")]
    ])
  );

/*
* 'Edification 🗣' reply 
*/
app.hears("Edification 🗣", ctx => {
  return ctx
    .reply(
      "Build up your WV Family to your guests, so that your guests will see your fellow reps as important people & will listen and respect them.\n\n👇 Watch QuickCoach to learn how to become a master edifier:\nhttps://youtu.be/Ca9kT4-Nxk0"
    )
    .then();
});

/*
* 'Before ⏪' reply 
*/
app.hears("Before ⏪", ctx => {
  return ctx
    .reply(
      "Guests may feel awkward coming into the TP, so there are some things we can do to keep them from feeling weird. Guests are more likely to make a decision when they’re comfortable!\n\n👇 Watch QuickCoach to learn how to prep before the Presentation:\nhttps://youtu.be/Ezk3vmHqX3c"
    )
    .then();
});

/*
* 'During ▶️' reply 
*/
app.hears("During ▶️", ctx => {
  return ctx
    .reply(
      "You’ve got your guests in the seat! Now it’s time to make sure they have a fair chance of seeing the information properly!\n\n👇 Watch QuickCoach to learn how to prep before the Presentation:\nhttps://youtu.be/Ezk3vmHqX3c"
    )
    .then();
});

/*
* 'After ⏩' reply 
*/
app.hears("After ⏩", ctx => {
  return ctx
    .reply(
      "The presentation is over! Now it’s time to collect decision, not excuses! On top of having your applications ready, there’s some techniques in making APP TIME smooth and awkward free for everyone!\n\n👇Watch QuickCoach to learn how to be a pro closer:\nhttps://youtu.be/LhAaKBjs9n4"
    )
    .then();
});

/*
* 'Back ↩️' reply from Etiquette menu
* DIRECT@ TO ETIQUETTE MENU
*/
app.hears("Back ↩️", ctx => {
  return ctx.reply("Back", etiquette).then();
});

/*********************
  HELP Menu
@teamchats, teamapps, facebook groups, home
*********************/

//need

/*********
Polling
**********/

app.startPolling();
