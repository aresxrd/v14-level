const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const moment = require("moment")
require('moment-duration-format');
const aresxrd_config = require("../../../config.json")
module.exports = {name: "yardım",aliases: ["help"],execute: async (client, message, args, aresxrd_embed) => {     
const aresxrd_dropdown = new ActionRowBuilder()
.addComponents(new SelectMenuBuilder().setCustomId('yardım').setPlaceholder(`Komutlar`).addOptions([{label:`Bot Komutları`,description:`${aresxrd_config.clientFooter}`,value:`kayıtkomut`,emoji:`🛠`}])) 
message.channel.send({content:`> **Komutlara Aşşağıdaki Menüden Ulaşabilirsiniz!**`,components:[aresxrd_dropdown]})}}