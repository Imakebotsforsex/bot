const Discord = require('discord.js');

module.exports = {
    name: "mathtest",
    description: "Take a math test",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 102);

        const mathtestEmbed = new Discord.MessageEmbed()
        .setDescription(`${member.username} scored ` + rng + " out of 100 on their math test!")
        .setColor("#7289da")

        message.channel.send(mathtestEmbed);
    }
}