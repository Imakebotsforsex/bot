const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Checks the bots API ping!",

    async run (bot, message, args) {
        let popEmbed = new Discord.MessageEmbed()
        .setTitle(`🏓\`${client.ws.ping}\`ms`)
        .setTimestamp()
        .setColor('#7289da')
        message.channel.send(popEmbed)
    }
}