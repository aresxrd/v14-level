const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const moment = require("moment");
const ms = require("ms");
const aresxrd_config = require("../../../config.json")
module.exports = {name: "eval",aliases: [],execute: async (client, message, args, aresxrd_embed) => {
if(message.author.id != aresxrd_config.botOwner)return;
if (!args[0]) return message.reply({content:`kodkodkod`});
let code = args.join(" ");
if (code.includes(client.token)) return message.reply({content:"tokenmi hihihiahahh*"});
try {var sonuç = eval_aresxrd(await eval(code));
if (sonuç.includes(client.token))
return message.reply({content:"tokenmi hihihihah"});} catch (err) {}},};function eval_aresxrd(aresxrd) {if (typeof text !== "string")aresxrd = require("util").inspect(aresxrd, { depth: 0 });aresxrd = aresxrd.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));return aresxrd;}