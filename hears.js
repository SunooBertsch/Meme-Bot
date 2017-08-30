// module.exports = function(app, Telegraf) {
//   /*
//   * ResidualBot start command
//   * @parameters text, 'welcome' keyboard markup
//   */
//   app.command("/start", ctx => {
//     return ctx
//       .reply(
//         `💠 Welcome to Team Unstoppable! 💠 \n\nI'm Team Unstoppable's Bot.\n\nMy role is to get you started correctly and to get you started fast by what we call 'Triple T':\n\n1) Welcome to the team\n2) Training\n3) Travel Party\n\nClick the "*Welcome to the Team*🤗" button below to see your first steps!`,
//         home
//       )
//       .then();
//   });
//   /************
//   HOME MENU
// @welcometotheteam, training, travelparty, help
// *************/

//   const home = Telegraf.Extra
//     .markdown()
//     .markup(m =>
//       m.keyboard([
//         [
//           m.callbackButton("Welcome To The Team 🤗"),
//           m.callbackButton("Training 🥊")
//         ],
//         [m.callbackButton("Travel Party 🎉"), m.callbackButton("Help 🔑")]
//       ])
//     );

//   /*
// * 'Welcome To The Team 🤗' reply
// ** @DIRECT TO 'TEAM RESOURCES'
// */
//   app.hears("Welcome To The Team 🤗", ctx => {
//     return ctx.reply("Team Resources", teamResources).then();
//   });

//   /*
// * 'Training' reply
// ** @DIRECT TO 'TRAINING'
// */
//   //   app.hears("Training 🥊", ctx => {
//   //     return ctx.reply("Training ", training).then();
//   //   });

//   //   /*
//   // * 'Travel Party' reply
//   // ** @DIRECT TO 'TRAVEL PARTY'
//   // */
//   //   app.hears("Travel Party 🎉", ctx => {
//   //     return ctx.reply("Travel Party", travelParty).then();
//   //   });

//   //   /*
//   // * 'Help' reply
//   // ** @DIRECT TO 'HELP'
//   // */
//   //   app.hears("Help 🔑", ctx => {
//   //     return ctx.reply("Help", help).then();
//   //   });
// };
