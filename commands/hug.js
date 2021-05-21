const Discord = require('discord.js');

module.exports = {
    name: "hug",
    description: "Hugs a member",

    async run (client, message, args) {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Specify a member to hug.');

        if(!member) return message.channel.send(`Can\'t find that user`);

        if(member.id === message.author.id) return message.channel.send('You hugged yourself');

        const hugEmbed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .setTitle('You hugged someone!')
        .setImage('https://media.tenor.com/images/59bd16406f4e5c78fb5caf51ce446e76/tenor.gif')

        message.channel.send(hugEmbed);


    }
}