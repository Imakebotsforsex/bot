const { tictactoe } = require('reconlx')

module.exports = {
    name: "tictactoe",

    async run (bot, message, args) {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Specify a user to play against.')

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}