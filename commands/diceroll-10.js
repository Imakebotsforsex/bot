const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "diceroll-10",

    run: async(client, message, args) => {
        const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        const choice = choices[Math.floor(Math.random() * choices.length)];
        
        let diceroll10Embed = new MessageEmbed()
        .setColor("#7289da")
        .setTitle(`You rolled the die & landed on ${choice}`)

        message.channel.send(diceroll10Embed)
    }
}