const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);
const { Extra, Markup } = require("telegraf");

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
* 'Welcome To The Team 🤗' reply
** @DIRECT TO 'TEAM RESOURCES'
*/
app.hears("Welcome To The Team 🤗", ctx => {
  return ctx.reply("Team Resources", teamResources).then();
});

/*
* 'Training' reply
** @DIRECT TO 'TRAINING'
*/
app.hears("Training 🥊", ctx => {
  return ctx.reply("Training ", training).then();
});

/*
* 'Travel Party' reply
** @DIRECT TO 'TRAVEL PARTY'
*/
app.hears("Travel Party 🎉", ctx => {
  return ctx.reply("Travel Party", travelParty).then();
});

/*
* 'Help' reply
** @DIRECT TO 'HELP'
*/
app.hears("Help 🔑", ctx => {
  return ctx.reply("Help", help).then();
});

/*********************
  Team Resources Menu
@teamchats, teamapps, facebook groups, home
*********************/

const teamResources = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [m.callbackButton("Team Chats"), m.callbackButton("Team Apps")],
      [m.callbackButton("Facebook Groups"), m.callbackButton("Home")]
    ])
  );

/*
* 'Team Chats' reply
*/
app.hears("Team Chats", ctx => {
  return ctx
    .reply(
      "💠 Team Unstoppable Channel 💠 \n Big training events, team calls, team bonding, rank recognition will be announced here. Pay attention to this page as much as possible.\n\n✅ Add business reps ONLY to this channel!\nClick the link below to join now!\n t.me/UnstoppableChannel\n\n💠 Team Unstoppable Chat 💠 \n A group chat to stay plugged in to our team members from around the world! Welcome your new teammates, post travel parties, and recognize new ranks here, too.\n\n ✅ Add business reps ONLY to this chat! \n Click the link below to join now! \n t.me/UnstoppableGroupChat"
    )
    .then();
});

/*
* 'Team Apps' reply
*/
app.hears("Team Apps", ctx => {
  return ctx
    .replyWithHTML(
      "<b>Dreamtrips</b>\n\nUser ID and password have been emailed to you. Set up your profile picture and start booking your first DreamTrip!\n\n<b>ChillinWW (ChillinWorldWide)</b>\n\nThis app has EVERYTHING you need for success in WorldVentures aside from your mentors!\nPlug in to the QuickCoach videos, Flye SmartCard (password: boomer1), or Audios from any of our top leaders."
    )
    .then();
});

/*
* 'Facebook Groups' reply
*/
app.hears("Facebook Groups", ctx => {
  return ctx
    .replyWithHTML(
      "<b>Funstoppable FB Group</b>\n\nWhere all Unstoppable Dreamtrips members come together and share stories about their experiences with all things DreamTrips (trip, DreamTrips Local, Price Pledge, etc. testimonials).\n\nThis is not a Facebook page about business, so no “Welcome to the Team” posts or anything business related here!\n\nAdd EVERYONE to this group!"
    )
    .then();
});

/*
* 'Home' reply
*/
app.hears("Home", ctx => {
  return ctx.reply("Home", home).then();
});

/*********************
  TRAINING Menu
@teamchats, teamapps, facebook groups, home
*********************/

//need

/*********************
  TRAVEL PARTY Menu
@teamchats, teamapps, facebook groups, home
*********************/

//need

/*********************
  HELP Menu
@teamchats, teamapps, facebook groups, home
*********************/

//need

/*********
Polling
**********/

app.startPolling();
