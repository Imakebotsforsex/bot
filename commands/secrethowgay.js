const Discord = require('discord.js');

module.exports = {
    name: "secrethowgay",
    description: "Zootopia",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 10000);

        const secrethowgayEmbed = new Discord.MessageEmbed()
        .setTitle(`Gay machine calculated below.`)
        .setDescription(`${member.username} is ` + rng + "% Gay")
        .setColor("#7289da")

        message.channel.send(secrethowgayEmbed);
    }
}