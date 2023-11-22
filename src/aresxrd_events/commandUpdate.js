const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const aresxrd_config = require("../../config.json");
const ms = require('ms');
module.exports = async (oldMessage,newMessage) => {
const aresxrd = await client.users.cache.get(aresxrd_config.botOwner);
if (aresxrd_config.prefix && !newMessage.content.startsWith(aresxrd_config.prefix)) return;
const args = newMessage.content.slice(1).trim().split(/ +/g);
const commands = args.shift().toLowerCase();
const cmd = client.commands.get(commands) || [...client.commands.values()].find((e) => e.aliases && e.aliases.includes(commands));
const aresxrd_embed = new EmbedBuilder().setColor(`#2f3136`).setAuthor({name: newMessage.member.displayName, iconURL: newMessage.author.avatarURL({ dynamic: true, size: 2048 })}).setFooter({text: aresxrd.tag , iconURL: aresxrd.avatarURL({ dynamic: true, size: 2048 })})
if (cmd) {if(client.kanalbul(aresxrd_config.commandLog)){client.kanalbul(aresxrd_config.commandLog).send(`> **\`${newMessage.member.user.tag}\` Kullanıcısı <#${newMessage.channel.id}> Kanalında \`.${cmd.name}\` Komudunu Kullandı!**`)}
cmd.execute(client, newMessage, args, aresxrd_embed); }}
module.exports.conf = {name: "messageUpdate"}
