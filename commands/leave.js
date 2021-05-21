const distube = require('distube');

module.exports = {
    name: "leave",
    run: async (bot, message, args) => {

    if (!message.member.voice.channel) return message.channel.send('Go to a voice channel then run this again.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.stop(message)

        message.channel.send('Left the voice channel.')
    } else if (!queue) {
        return
        };
    }
}