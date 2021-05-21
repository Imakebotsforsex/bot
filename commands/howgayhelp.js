const Discord = require('discord.js')

module.exports = {
    name: "howgayhelp",

    async run (bot, message, args) {

        let howgayhelpEmbed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .addField('`howgay`', "Shows how gay you are in percentages goes up to 100%, no perms required")
        .addField('`howgay2`', "Shows how gay you are in percentages goes up to 200%, no perms required")
        .addField('`howgay3`', "Shows how gay you are in percentages goes up to 300%, no perms required")
        .addField('`howgay4`', "Shows how gay you are in percentages goes up to 400%, no perms required")
        .addField('`howgay5`', "Shows how gay you are in percentages goes up to 500%, no perms required")
        message.channel.send(howgayhelpEmbed)
    }
}