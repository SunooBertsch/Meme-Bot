const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);
const { Extra, Markup } = require("telegraf");

// app.on("text", ctx => {
//   ctx.reply(":)", Extra.markup(m => m.removeKeyboard()));
// });

// Landing page keyboard
const home = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [m.callbackButton("Team Resources"), m.callbackButton("Training")],
      [m.callbackButton("Travel Party"), m.callbackButton("Help")]
    ])
  );
// Welcome page keyboard
const welcome = Telegraf.Extra
  .markdown()
  .markup(m =>
    m.keyboard([
      [m.callbackButton("Team Chats"), m.callbackButton("Team Apps")],
      [m.callbackButton("Facebook Groups"), m.callbackButton("Home")]
    ])
  );
//
app.command("/start", ctx => {
  return ctx
    .reply(
      "Welcome to Team Unstoppable!\n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T'\n\n1) Welcome to the team\n\n2) Training\n\n 3) Travel Party\n\nClick the 'Welcome to the Team' button below to see your first steps!",
      home
    )
    .then();
});
app.hears("Home", ctx => {
  return ctx.reply("Home", home).then();
});

app.hears("Team Resources", ctx => {
  return ctx.reply("Welcome to the team!", welcome).then();
});
//Start working here.
app.hears("Team Chats", ctx => {
  return ctx
    .reply(
      "Team Unstoppable Channel Big training events, team calls, team bonding, rank recognition will be announced here.\n\n Pay attention to this page as much as possible.\n\nAdd business reps ONLY to this channel!\n\nClick the link below to join now! t.me/UnstoppableChannel"
    )
    .then();
});

app.hears("Team Apps", ctx => {
  return ctx
    .replyWithHTML(
      "<b>Dreamtrips</b>\n\nUser ID and password have been emailed to you. Set up your profile picture and start booking your first DreamTrip!\n\n<b>ChillinWW (ChillinWorldWide)</b>\n\nThis app has EVERYTHING you need for success in WorldVentures aside from your mentors!\nPlug in to the QuickCoach videos, Flye SmartCard (password: boomer1), or Audios from any of our top leaders."
    )
    .then();
});

app.hears("Facebook Groups", ctx => {
  return ctx
    .replyWithHTML(
      "<b>Funstoppable FB Group</b>\n\nWhere all Unstoppable Dreamtrips members come together and share stories about their experiences with all things DreamTrips (trip, DreamTrips Local, Price Pledge, etc. testimonials).\n\nThis is not a Facebook page about business, so no “Welcome to the Team” posts or anything business related here!\n\nAdd EVERYONE to this group!"
    )
    .then();
});
app.startPolling();
