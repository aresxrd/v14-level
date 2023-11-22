const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType, AttachmentBuilder } = require("discord.js");
const aresxrd_config = require("../../config.json");
const canvafy = require("canvafy");
const levels = require("../../Schema/level");
const ms = require('ms');
module.exports = async (message) => {

if(message.author.bot || !message.guild)return;
if (aresxrd_config.prefix && message.content.startsWith(aresxrd_config.prefix)) return;

const xpRandom = (length) => {
  return Number(Math.floor(Number(length) * 5 / 3));
}



    if (!aresxrd_config.levelSystem) return;
    const { xp, gerekli, level } = await levels.findOne({ guildID: message.guild.id, userID: message.author.id }) || { xp: 0, gerekli: 100, level: 0 };
    await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$inc: { xp: 10 } }, { upsert: true });
    const xpp = xp + xpRandom(message.content.length);
    const levelUp = await new canvafy.LevelUp()
    .setAvatar(message.author.displayAvatarURL({extension:"png",size:2048}))
    .setBackground("image", "https://cdn.discordapp.com/attachments/897876879430807552/1175044719672315927/IMG_5393.jpg?ex=6569ccac&is=655757ac&hm=84d8680fa975b63874252d4f98a378bc7594c2e153ccb19885be53bdbb9ffa84&")
    .setUsername(message.author.username)
    .setBorder("#000000")
    .setAvatarBorder("#75ed5a")
    .setOverlayOpacity(0.7)
    .setLevels(level,(level+1))
    .build();
    if (xpp >= gerekli) {
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$set: { xp: 0 } }, { upsert: true });
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$set: { gerekli: gerekli + 200 }}, { upsert: true });
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$inc: { level: 1 }}, { upsert: true });
      if (aresxrd_config.levelChannel) {
      client.guilds.cache.get(message.guild.id).channels.cache.get(aresxrd_config.levelChannel).send({content:`${message.author} Adlı Kullanıcı Level Atladı! [\` ${level + 1} \`]`});
      message.reply({files: [{attachment: levelUp,name: `levelup-${message.member.id}.png`}]});
      } else {
    message.reply({files: [{attachment: levelUp,name: `levelup-${message.member.id}.png`}]});
      };
    }

 }
module.exports.conf = {name: "messageCreate"}
