const Telegraf = require("telegraf");
const keys = require("./keys");
const app = new Telegraf(keys.clientID);

require("./components/home")(app, Telegraf);
require("./components/team-resources")(app, Telegraf);
require("./components/training")(app, Telegraf);
require("./components/travel-party")(app, Telegraf);
require("./components/help")(app, Telegraf);

app.startPolling();
