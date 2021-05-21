const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "diceroll-20",

    run: async(client, message, args) => {
        const choices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
        const choice = choices[Math.floor(Math.random() * choices.length)];
        
        let diceroll20Embed = new MessageEmbed()
        .setColor("#7289da")
        .setDescription(`You rolled the die & landed on ${choice}`)

        message.channel.send(diceroll20Embed)
    }
}