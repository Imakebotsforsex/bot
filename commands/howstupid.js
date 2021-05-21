const Discord = require('discord.js');

module.exports = {
    name: "howstupid",
    description: "Zootopia",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howstupidEmbed = new Discord.MessageEmbed()
        .setTitle(`Shrek gave the results below.`)
        .setDescription(`${member.username} is ` + rng + "% stupid")
        .setColor("#7289da")

        message.channel.send(howstupidEmbed);
    }
}