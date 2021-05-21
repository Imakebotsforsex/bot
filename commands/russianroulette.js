const Discord = require('discord.js')

module.exports = {
    name: "russianroulette",
    
    async run (bot, message, args) {
        let replies = ["You pulled the trigger and nothing happend", "You pulled the trigger and nothing happend", "You pulled the trigger and nothing happend", "You shit yourself", "You pissed yourself.", "You pulled the trigger and blew your brains out.", "You pulled the trigger and nothing happend", "You pulled the trigger and nothing happend"]

        let result = Math.floor((Math.random() * replies.length));

        let cumembed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .setTitle(`${message.author.username} pulled the trigger.`)
        .addField("Outcome:", replies[result])
        .setTimestamp()

        message.channel.send(cumembed)
    }
}