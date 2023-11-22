const aresxrd_config = require("../../config.json");
const { joinVoiceChannel } = require("@discordjs/voice");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const client = global.client;
module.exports = () => {
client.user.setPresence({activities:[{name: aresxrd_config.clientPresence ? aresxrd_config.clientPresence : `aresxrd Was Here`,type: ActivityType.Streaming,url:"https://www.twitch.tv/aresxxdd"}], status: "dnd" });
const aresxrd_kanal = client.channels.cache.get(aresxrd_config.voiceChannel);
if(!aresxrd_kanal)return
joinVoiceChannel({channelId: aresxrd_kanal.id,guildId: aresxrd_kanal.guild.id,adapterCreator: aresxrd_kanal.guild.voiceAdapterCreator,selfDeaf: true,selfMute:true});}
module.exports.conf = {name: "ready"}
