const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip",
    description: "flips a coin!",
    run: async(client, message, args) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setColor("#7289da")
        .setTitle(`Coinflip!`)
        .setDescription(`You flipped coin and it landed on **${choice}**!`)
        .setTimestamp()
        message.channel.send(embed)
    }
}