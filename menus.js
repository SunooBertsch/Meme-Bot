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

/*********************
  TRAINING Menu
@teamchats, teamapps, facebook groups, home
*********************/

const training = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[m.callbackButton("Events 🏋"), m.callbackButton("Audios 🎧")],
			[m.callbackButton("Home 🏠")]
		])
	);

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

/*********************
	  HOW TO INVITE Menu
	@make a list, close friends/family, strangers, back
	*********************/

const howToInvite = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[m.callbackButton("Make a List 📝"), m.callbackButton("FLYE ❇")],
			[
				m.callbackButton("Close Friends/Family ❤"),
				m.callbackButton("Strangers 🖤")
			],
			[m.callbackButton("Back ↩")]
		])
	);

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
			[m.callbackButton("Back ↩")]
		])
	);

/*********************
  MAKE A LIST MENU
@make a list, inviting fundamenals, back
*********************/

const makeAList = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[
				m.callbackButton("1) Make a List 📝"),
				m.callbackButton("2) Inviting Fundamentals 📞")
			],
			[m.callbackButton("Back: How To Invite ↩️")]
		])
	);

/*********************
  Close Friends/Family Menu
@2 step text, tp text, acquaintances, back
*********************/

const closeFriendsAndFamily = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[m.callbackButton("2 Step Text 📲"), m.callbackButton("TP Text 🎊")],
			[
				m.callbackButton("Acquaintances 💛"),
				m.callbackButton("Back: How To Invite ↩")
			]
		])
	);

/*********************
  CHECKLIST MENU
@checklist, presentation, back
*********************/

const checklist = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[m.callbackButton("✅ Checklist ✅"), m.callbackButton("Presentation 💻")],
			[m.callbackButton("Back ↩")]
		])
	);

/*********************
  HELP Menu
@teamchats, teamapps, facebook groups, home
*********************/

const help = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[
				m.callbackButton("VW Support 🌎"),
				m.callbackButton("Rovia/Dreamtrips 🛩")
			],
			[
				m.callbackButton("Gold​ ​Support 🔱"),
				m.callbackButton("Platinum​ ​Support​ 👑")
			],

			[m.callbackButton("Home 🏠")]
		])
	);

/*********************
  PLATINUM SUPPORT MENU
@concierge, teledoc, roadside assistance, emergency evac,
identity protection, back
*********************/

const platinum = Telegraf.Extra
	.markdown()
	.markup(m =>
		m.keyboard([
			[m.callbackButton("Concierge ☎"), m.callbackButton("Teledoc 🤒")],
			[
				m.callbackButton("Roadside Assistance 🚙"),
				m.callbackButton("Emergency Evac 🚁")
			],
			[
				m.callbackButton("Identity Theft Protection 🔐"),
				m.callbackButton("Back: Help ↩")
			]
		])
	);

module.exports = {
	home,
	teamResources,
	training,
	travelParty,
	etiquette,
	makeAList,
	closeFriendsAndFamily,
	checklist,
	help,
	platinum
};
