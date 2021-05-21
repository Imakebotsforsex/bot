module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.reply("You don't have the right permissions to use this command!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds. (MAX = 21600s)")
        
        message.channel.setRateLimitPerUser(duration)
        message.reply(`Successfully set the slowmode to ${duration}!`)
    }
}