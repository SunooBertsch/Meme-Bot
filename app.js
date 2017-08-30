const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);
const menus = require("./menus")(app, Telegraf);

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
      menus.home
    )
    .then();
});

/*
* 'Home' reply
*/
app.hears("Home 🏠", ctx => {
  return ctx.reply("Home", menus.home).then();
});

/*
* 'Welcome To The Team 🤗' reply
** @DIRECT TO 'TEAM RESOURCES'
*/
app.hears("Welcome To The Team 🤗", ctx => {
  return ctx.reply("Team Resources", menus.teamResources).then();
});

/*
* 'Training 🥊' reply
** @DIRECT TO 'TRAINING'
*/
app.hears("Training 🥊", ctx => {
  return ctx.reply("Training", menus.training).then();
});

/*
* 'Travel Party 🎉' reply
** @DIRECT TO 'TRAVEL PARTY'
*/
app.hears("Travel Party 🎉", ctx => {
  return ctx.reply("Travel Party", menus.travelParty).then();
});

/*
* 'Help' reply
** @DIRECT TO 'HELP'
*/
app.hears("Help 🔑", ctx => {
  return ctx.reply("Help", menus.help).then();
});

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

/*
* 'What's a Travel Party' reply
*/
app.hears("What's​ ​a​ ​TP 🎊?​", ctx => {
  return ctx
    .reply(
      "A Travel Party is an event that we hold in your house/apartment (no matter how big/small and messy/clean) where we bring together your friends and family to present to them all at the same time.\n\nThis is the launch event for your business and, trust me, everyone has one.\n\nClick the “Etiquette​ ​🎩”​ ​tab below to learn how to throw your first Travel Party launch event!",
      menus.travelParty
    )
    .then();
});

/*
* 'Etiquette​ 🎩' reply
* DIRECT@ TO ETIQUETTE MENU
*/
app.hears("Etiquette​ 🎩", ctx => {
  return ctx.reply("Etiquette​", menus.etiquette).then();
});

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
  return ctx.reply("Back", menus.travelParty).then();
});

/*
* 'How To Invite' reply
* DIRECT@ TO HOW TO INVITE MENU
*/
app.hears("How to Invite 📲", ctx => {
  return ctx.reply("How to Invite", menus.howToInvite).then();
});

app.hears("Make a List 📝", ctx => {
  return ctx.reply("Making a List", menus.makeAList).then();
});

/*
* '1) Make a list' reply
*/
app.hears("1) Make a List 📝", ctx => {
  return ctx
    .reply(
      "First things first---MAKE YOUR LIST! Once you create your list, have it with you at ALL times, so you’ll be able to add to it whenever you meet someone new!\n\n👇 Watch QuickCoach to learn how to master your list:\nhttps://youtu.be/Se3EZ_ZYLWA"
    )
    .then();
});

/*
* '2) Inviting fundamentals' reply
*/
app.hears("2) Inviting Fundamentals 📞", ctx => {
  return ctx
    .reply(
      "The close starts in the invite! If you don’t effectively invite people to see the information, your business won’t grow!\n\nNote: Always make sure your friend/family member knows you’re going to be sharing something with them. We never want to mislead anyone.\n\n👇 Watch QuickCoach to learn how to be a Master Inviter:\nhttps://youtu.be/ozUvHrKvn1g"
    )
    .then();
});

/*
* 'Back: How To Invite ↩️' reply
*/
app.hears("Back: How To Invite ↩️", ctx => {
  return ctx.reply("How to Invite", menus.howToInvite).then();
});

/*
* 'FLYE' reply
* NEEDS TO SEND FLYE PICTURE STILL
*/
app.hears("FLYE ❇", ctx => {
  return ctx
    .reply(
      "STEP 1:​\nYou - “Hey Bob! Trust all is well! I got an important question for you...”\n​Bob - “What’s up?”\n\nSTEP 2:​\nYou - “Have you seen this yet!!?”\n\nSTEP 3:​ \nYou - “I got early access!! We got to talk before this thing goes viral!!\nYou free today to grab coffee real quick?”\n\n🚫 Make sure the pic you are sending does NOT include the word “FLYE” on it.\n📲 For more options, go to “Step 5” in the “Flye” Section from the ChillinWW App.\nPassword: boomer1"
    )
    .then();
});

/*
* 'Close Friends/Family' reply
* DIRECT@ CLOSE FRIENDS/FAMILY MENU
*/
app.hears("Close Friends/Family ❤", ctx => {
  return ctx.reply("Close Friends/Family", menus.closeFriendsAndFamily).then();
});

/*
* '2 Step Text 📲' reply
*/
app.hears("2 Step Text 📲", ctx => {
  return ctx
    .reply(
      "Make things natural and easy! If you’re used to texting your closest friends/family, then this is the perfect format to go about the invite!\n\n👇 Watch QuickCoach to learn how to text properly:\nhttps://youtu.be/X1j5yvnkA6U"
    )
    .then();
});

/*
* 'TP Text 🎊' reply
*/
app.hears("TP Text 🎊", ctx => {
  return ctx
    .reply(
      "Getting your friends and family to a TP is a little different. You’re inviting them to your house/apartment at a specific time, so you want to stay in control.\n\n👇 Watch QuickCoach to learn how to get the butts in the seats:\nhttps://youtu.be/_LbGpUMnv3I"
    )
    .then();
});

/*
* 'Acquaintances 💛' reply
*/
app.hears("Acquaintances 💛", ctx => {
  return ctx
    .reply(
      "Have friends/family who you haven’t spoken to in forever? Don’t worry! We got that invite covered too!! Some of our best members/reps have joined because an old friend had the guts to invite them as well.\n\n👇 Learn from NMD David Townsend---the master of lukewarm market:\nhttps://youtu.be/buWUxDs2_Sw"
    )
    .then();
});

/*
* 'Strangers 🖤' reply
*/
app.hears("Strangers 🖤", ctx => {
  return ctx
    .reply(
      "If you haven’t finished your list of Close Friends/Family or Acquaintances, go back and invite them out! The key to building your business is trust​.\n\nMake the stranger into a friend first before inviting them to see your WV baby!"
    )
    .then();
});

/*
* 'Checklist ✅ ' reply
* DIRECT@ TO CHECKLIST MENU
*/
app.hears("Checklist ✅", ctx => {
  return ctx.reply("Checklist", checklist).then();
});

/*
* 'Checklist ✅ ' reply
*/
app.hears("✅ Checklist ✅", ctx => {
  return ctx
    .reply(
      "KEEP IT SIMPLE & DUPLICATABLE\n\n✅ Music--before & after prez. Keep it clean, loud & upbeat! You can find the TP Mix in the “Audios” section of the ChillinWW App.\n✅  Printed Applications--Enough for all guests! You can find them in the “File” section of our Team Unstoppable Channel or in your BackOffice (www.domain.worldventures.biz).\n✅ Updated Presentation--Downloaded to Smart TV/Laptop\n✅ Technology--test all tech at least 3hrs prior to starting\n✅ Seating--facing away from the doorway\n✅ Snacks--simple chips/dip & water. No elaborate meals!"
    )
    .then();
});

/*
* 'Presentation 💻' reply
*/
app.hears("Presentation 💻", ctx => {
  return ctx
    .reply(
      "FLYE Presentation to share with prospects:\nLink: https://vimeo.com/228471923\nPassword: iwantone\n\n❌ Do NOT share the downloadable link below for exposures.\nThis is just for reps to download for convenience!!\n\n**Downloadable Link: http://bit.ly/2ubCZOz ❌"
    )
    .then();
});

/*
* 'VW Support 🌎' reply
*/
app.hears("VW Support 🌎", ctx => {
  return ctx
    .reply(
      "💠 WorldVentures Rep Support 💠\n1-972-805-5100\nHours: 8 AM – 8 PM CST Mon – Fri\neteam@worldventures.com\n\n5100 Tennyson Parkway, Plano, TX 75024, USA"
    )
    .then();
});

/*
* 'Rovia/Dreamtrips 🛩' reply
*/
app.hears("Rovia/Dreamtrips 🛩", ctx => {
  return ctx
    .reply(
      "💠 Rovia/DreamTrips Support 💠\n1-972-805-5200\nsupport@rovia.com\n\nYou can call them to book/cancel flights, hotels, car rentals, cruises, or do so in the DreamTrips app."
    )
    .then();
});

/*
* 'Gold​ ​Support 🔱' reply
*/
app.hears("Gold​ ​Support 🔱", ctx => {
  return ctx
    .reply(
      "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
    )
    .then();
});

/*
* 'Platinum​ ​Support​ 👑' reply
* DIRECT@ TO PLATINUM SUPPORT MENU
*/
app.hears("Platinum​ ​Support​ 👑", ctx => {
  return ctx.reply("Platinum Support", menus.platinum).then();
});

/*
* 'Concierge ☎️' reply
*/
app.hears("Concierge ☎️", ctx => {
  return ctx
    .reply(
      "💠 Concierge 💠\n1-855-896-2815\nconcierge@worldventures.com\n\nFor travel help, driving directions, restaurant reservations, sending flowers or simply asking a question- your DreamTrips Concierge can help. Available 24/7. \n\nHave your WorldVentures ID# found in your welcome e-mail READY."
    )
    .then();
});

/*
* 'Teledoc 🤒' reply
*/
app.hears("Teledoc 🤒", ctx => {
  return ctx
    .reply(
      "💠 Teledoc 💠\n1-800-835-2362\n\nNot feeling well and you don’t time for a doctor appointment? Don’t want to wait 3 hours in urgent care for something that can be diagnosed over the phone? Talk to a real doctor via audio or video call and pick up any prescribed medications at your local pharmacy.\n\nTo set up your account online go to: www.teledoc.com\nPromo Code: “WORLD VENTURES”"
    )
    .then();
});

/*
* 'Roadside Assistance 🚙' reply
*/
app.hears("Roadside Assistance 🚙", ctx => {
  return ctx
    .reply(
      "💠 Roadside Assistance 💠\n1-800-214-2790\n\n24 Hour Roadside Assistance Includes...\nVehicle Towing\nLock outs\nTire Change\nJump Starts\nEtc.\non any car that you drive.\n\n3 Claims Per Year\nValue: $100 limit/claim"
    )
    .then();
});

/*
* 'Emergency Evac 🚁' reply
*/
app.hears("Emergency Evac 🚁", ctx => {
  return ctx
    .reply(
      "💠 Emergency Evacuation 💠\n1-888-678-7852\n\nCall if you are seriously sick and/or injured and need to be transported back to your home country/local home hospital."
    )
    .then();
});

/*
* 'Identity Theft Protection 🔐' reply
*/
app.hears("Identity Theft Protection 🔐", ctx => {
  return ctx
    .reply("💠 Emergency Evacuation 💠\n1-888-446-4047\n\nSelf-explanatory.")
    .then();
});

/*
* 'Back: Help ↩️' reply
*/
app.hears("Back: Help ↩️", ctx => {
  return ctx.reply("Help", menus.menus.help).then();
});

/*********
Polling
**********/

app.startPolling();
