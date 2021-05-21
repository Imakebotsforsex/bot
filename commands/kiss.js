const Discord = require('discord.js');

module.exports = {
    name: "kiss",
    description: "Kiss a member",

    async run (client, message, args) {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Specify a member to kiss.');

        if(!member) return message.channel.send(`Can\'t find that user`);

        if(member.id === message.author.id) return message.channel.send('You kissed yourself');

        const kissEmbed = new Discord.MessageEmbed()
        .setColor("#7289da")
        .setTitle('You kissed someone!')
        .setImage('https://i0.wp.com/38.media.tumblr.com/f9fb9a2e01ecdd94eecb2ba50d7ed080/tumblr_n73wxmz2oD1tros9go1_500.gif')

        message.channel.send(kissEmbed);


    }
}