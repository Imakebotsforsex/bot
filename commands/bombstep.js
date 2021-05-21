const Discord = require('discord.js')

module.exports = {
    name: "bombstep",
    
    async run (bot, message, args) {

        let replies = ["||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:moneybag:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||", "||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||", "||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:moneybag:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||\n||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||||:bomb:||"]

        let result = Math.floor((Math.random() * replies.length));

        let bombstepEmbed = new Discord.MessageEmbed()
        .addField("⬇️", replies[result])


        message.channel.send(bombstepEmbed)
    }
}