const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const moment = require("moment")
require('moment-duration-format');
const canvafy = require("canvafy");
const config = require("../../../config.json")
const levels = require("../../../Schema/level");
module.exports = {
  name: "level",
  aliases: ["rank","lvl"],
  execute: async (client, message, args, embed) => {
const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const x = await levels.findOne({ guildID: message.guild.id, userID: member.user.id })
const rank = await new canvafy.Rank()
    .setAvatar(message.author.displayAvatarURL({ forceStatic: true, extension: "png" }))
    .setBackground("image", "https://cdn.discordapp.com/attachments/897876879430807552/1175044719672315927/IMG_5393.jpg?ex=6569ccac&is=655757ac&hm=84d8680fa975b63874252d4f98a378bc7594c2e153ccb19885be53bdbb9ffa84&")
    .setUsername(member.displayName ? member.displayName : message.author.username)
    .setBorder("#fff")
    .setStatus(message.member.presence?.status)
    .setLevel(x ? x.level : 1)
    .setRank(x ? x.level : 1)
    .setCurrentXp(x ? x.xp : 1)
    .setRequiredXp(x ? x.gerekli : 100)
    .build();
    message.reply({files:[{attachment:rank,name: `rank-${message.member.id}.png`}]});
}}