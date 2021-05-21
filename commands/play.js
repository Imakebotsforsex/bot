const distube = require('distube');

module.exports = {
    name: "play",
    run: async (bot, message, args) => {

        if (!message.member.voice.channel) return message.channel.send('Go to a voice channel then run this again.');
    
        const music = args.join(" ");
    
        bot.distube.play(message, music)
    }
}