const Discord = require('discord.js');

module.exports = {
    name: "howsmart",
    description: "Zootopia",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howsmartEmbed = new Discord.MessageEmbed()
        .setTitle(`Nerd machine calculated below.`)
        .setDescription(`${member.username} is ` + rng + "% smart")
        .setColor("#7289da")

        message.channel.send(howsmartEmbed);
    }
}