const Discord = require('discord.js');

module.exports = {
    name: "test",
    description: "Take a math test?",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 102);

        const testEmbed = new Discord.MessageEmbed()
        .setDescription(`${member.username} scored ` + rng + " out of 100")
        .setColor("#7289da")

        message.channel.send(testEmbed);
    }
}