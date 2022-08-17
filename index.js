// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientId, guildId } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
  .then(() => console.log("Successfully deleted all guild commands."))
  .catch(console.error);

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Login to Discord with your client's token
client.login(token);
