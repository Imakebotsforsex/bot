const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor("7289da")
        .setTitle("All of the bots commands:")
        .setDescription("**Moderation**\n `ban`, `kick`, `warn`, `deletewarns`, `warnings`, `mute`, `unmute`, `purge`\n\n **Utility**\n `setprefix`, `ping`, `weather`, `new`, `close`, `gstart`, `reroll`, `play`, `leave`, `skip`, `suggest`, `membercount`, `afk`, `slowmode`\n\n **Fun**\n `8ball`, `ascii`, `bombstep`, `calculate`, `cardswipe`, `coinflip`, `diceroll-10, diceroll-20, diceroll-30`, `howgay`, `howgay2`, `howgay3`, `howgay4`, `howgay5`, `howsmart`, `howstupid`, `hug`, `kill`, `kiss`, `mathtest`, `meme`, `pop`, `rps`, `russianroulette`, `simprate`, `tictactoe`")

        message.channel.send(helpEmbed)
    }
}