const Discord = require('discord.js');

module.exports = {
    name: "howgay5",
    description: "Zootopia",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 500);

        const howgay5Embed = new Discord.MessageEmbed()
        .setTitle(`Gay machine calculated below.`)
        .setDescription(`${member.username} is ` + rng + "% Gay")
        .setColor("#7289da")

        message.channel.send(howgay5Embed);
    }
}