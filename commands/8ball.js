const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    
    async run (bot, message, args) {


        if(!args[0]) return message.reply('Please ask a question.')
        let replies = ["Yes", "No", "Shrek says that the outlook is gonna be bad.", "Of course", "Better ask again :/", "Your mom", "Shrek says that the outlook is gonna be good", "The almighty 8ball Gods say No", "The almighty 8ball Gods say Yes", "040/The creator says Go for it!", "040/The creator says Don't go for it.", "Of course **NOT**", "A", "B", "C"]

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballEmbed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#7289da")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send(ballEmbed)
    }
}