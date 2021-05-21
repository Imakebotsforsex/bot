const Discord = require('discord.js')

module.exports = {
    name: "cardswipe",
    aliases: ['s'],
    
    async run (bot, message, args) {
        let replies = ["Too fast, try again", "Bad read, try again", "Too slow, try again", "Accepted, thank you"]

        let result = Math.floor((Math.random() * replies.length));

        let swipeEmbed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .addField("⬇️", replies[result])
        message.channel.send(swipeEmbed)
    }
}