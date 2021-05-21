const Discord = require('discord.js');

module.exports = {
    name: "simprate",
    description: "Zootopia",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const simprateEmbed = new Discord.MessageEmbed()
        .setTitle(`Pokimane simp machine calculated below.`)
        .setDescription(`${member.username} is ` + rng + "% simp")
        .setColor("#7289da")

        message.channel.send(simprateEmbed);
    }
}