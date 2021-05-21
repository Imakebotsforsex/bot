const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",

  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give a Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions" || x.name === "✉｜suggestions"))

    if(!channel) {
      return message.channel.send("Please create a channel with the name suggestion/suggestions!")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Suggestion by " + message.author.username)
    .setColor("#7289da")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sent your suggestion to suggestions!")
    
   }
 }