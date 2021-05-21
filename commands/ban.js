const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`You can't use this.`)
        }
        if (!args[0]) {
            return message.channel.send(`Mention a user to ban.`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} has been banned.`)
        } catch (e) {
            return message.channel.send(`Either cannot find user or their not here.`)
        }

    }
}