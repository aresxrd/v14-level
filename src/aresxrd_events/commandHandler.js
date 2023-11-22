const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const aresxrd_config = require("../../config.json");
const ms = require('ms');
module.exports = async (message) => {
const aresxrd = await client.users.cache.get(aresxrd_config.botOwner);
if (aresxrd_config.prefix && !message.content.startsWith(aresxrd_config.prefix)) return;
const args = message.content.slice(1).trim().split(/ +/g);
const commands = args.shift().toLowerCase();
const cmd = client.commands.get(commands) || [...client.commands.values()].find((e) => e.aliases && e.aliases.includes(commands));
const aresxrd_embed = new EmbedBuilder().setColor(`#2f3136`).setAuthor({name: message.member.displayName, iconURL: message.author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: aresxrd.tag , iconURL: aresxrd.avatarURL({ dynamic: true, size: 2048 })})
if (cmd) {if(client.kanalbul(aresxrd_config.commandLog)){client.kanalbul(aresxrd_config.commandLog).send(`> **\`${message.member.user.tag}\` Kullanıcısı <#${message.channel.id}> Kanalında \`.${cmd.name}\` Komudunu Kullandı!**`)}
cmd.execute(client, message, args, aresxrd_embed); }}
module.exports.conf = {name: "messageCreate"}
