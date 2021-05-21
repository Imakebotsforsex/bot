const Discord = require('discord.js'); // Main 

const client = new Discord.Client(); // Bot/Client

const { token, default_prefix } = require('./config.json'); // the bots token + prefix

const { readdirSync } = require('fs'); // forgot

const { join } = require('path'); //forgot

const distube = require('distube');

client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

const config = require('./config.json');
client.config = config; // config

const fs = require('fs');
const db = require('quick.db');
const canvacord = require('canvacord')


const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES"],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.commands= new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map();

//You can change the prefix if you like. It doesn't have to be ! or ;
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));



for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("you", { type: "WATCHING"})
})

let stats = {
    serverID: '840050541669122079',
    total: "841010740235075595",
    member: "841010882351726653",
    bots: "841010907051982858"
}



client.on('guildMemberAdd', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);

    
})



let stats2 = {
    serverID: '842099965857628180',
    total: "842591548569944075",
    member: "842591575895965707",
    bots: "842591591512145920"
}



client.on('guildMemberAdd', member => {
    if(member.guild.id !== stats2.serverID) return;
    client.channels.cache.get(stats2.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats2.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats2.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if(member.guild.id !== stats2.serverID) return;
    client.channels.cache.get(stats2.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats2.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats2.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);

    
})



client.on("message", async message => {

    if(message.author.bot) return

    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status have been removed (${info})`)
    }
    //checking for mentions
    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + ":" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
        }else return;
    }else;
    
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = default_prefix;


    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.on("guildMemberAdd", async member => {
    let channel = member.guild.channels.cache.find(c => c.name === 'chatting')
    let WELCOME = new Discord.MessageEmbed()
    .setTitle(`Hey there!`)
    .setDescription(`Welcome to City ${member.user}, we are happy to have you! You're member #${member.guild.memberCount}!`)
    .setColor('RANDOM')
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setFooter('Thanks For Joining!')
    channel.send(WELCOME)
  })


client.login(token);