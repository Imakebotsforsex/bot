const Discord = require('discord.js');

module.exports = {
    name: "kill",
    description: "Kills a member",

    async run (client, message, args) {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.reply('Specify a member to kill.');

        let kys = args.slice().join(" ");

        if(!member) return message.reply(`Can\'t find that user`);

        if(member.id === message.author.id) return message.reply('You killed yourself');

        const killEmbed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .addField(`${message.author.username} killed`, kys)
        .setImage('https://media.tenor.com/images/36087731a3452d2f46fd5606c625dee8/tenor.gif')

        message.channel.send(killEmbed);


    }
}