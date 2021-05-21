const Discord = require('discord.js')

module.exports = {
    name: "membercount",
    description: "test command",

    async run (client, message, args) {


        const membercount = new Discord.MessageEmbed()
        .setColor('#7289da')
        .setTitle(`There are ${message.guild.memberCount} members!`)
        .setDescription('This includes bots! ^')
        .setTimestamp()
        
        


        message.channel.send(membercount);
    }
}