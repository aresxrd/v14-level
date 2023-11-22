const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const client = global.client = new Client({fetchAllMembers: true,intents:Object.keys(GatewayIntentBits),partials:Object.keys(Partials),ws: {version: "10"}});
const { readdir } = require("fs");
const mongoose = require("mongoose");
const aresxrd_config = require("./config.json")
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
readdir("./src/aresxrd_commands/", (err, files) => {if (err) console.error(err)
files.forEach(f => {readdir("./src/aresxrd_commands/" + f, (err2, files2) => {
if (err2) console.log(err2)
files2.forEach(file => {let aresxrd_prop = require(`./src/aresxrd_commands/${f}/` + file);
console.log(`🧮 [aresxrd - COMMANDS] ${aresxrd_prop.name} Yüklendi!`);
commands.set(aresxrd_prop.name, aresxrd_prop);
aresxrd_prop.aliases.forEach(alias => {aliases.set(alias, aresxrd_prop.name);});});});});});
readdir("./src/aresxrd_events", (err, files) => {
if (err) return console.error(err);
files.filter((file) => file.endsWith(".js")).forEach((file) => {let aresxrd_prop = require(`./src/aresxrd_events/${file}`);
if (!aresxrd_prop.conf) return;
client.on(aresxrd_prop.conf.name, aresxrd_prop);
console.log(`📚 [aresxrd _ EVENTS] ${aresxrd_prop.conf.name} Yüklendi!`);});});
mongoose.connect(aresxrd_config.MongoURL, {
  useUnifiedTopology: true,
	useNewUrlParser: true
       })
.then(() => console.log("Mongo Bağlandı!"))
.catch(console.error);
Collection.prototype.array = function() {return [...this.values()]}
client.kanalbul = function(kanalisim) {let kanal = client.guilds.cache.get(aresxrd_config.guildID).channels.cache.find(k => k.name === kanalisim)
return kanal;}
client.rolbul = function(rolisim) {let rol = client.guilds.cache.get(aresxrd_config.guildID).roles.cache.find(r => r.name === rolisim)
return rol;}

client.now = function(aresxrd) {
let now = Math.floor(aresxrd / 1000)
return now;}

client.rolinc = function(rolisim) {let rol = client.guilds.cache.get(aresxrd_config.guildID).roles.cache.find(r => r.name.includes(rolisim))
return rol;}
client.login(aresxrd_config.token).then(() => console.log(`🟢 ${client.user.tag} Başarıyla Giriş Yaptı!`)).catch((aresxrd_err) => console.log(`🔴 Bot Giriş Yapamadı / Sebep: ${aresxrd_err}`));
