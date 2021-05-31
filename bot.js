// Importent Shit
const Discord = require('discord.js');
const config = require('./const.json');
const client = new Discord.Client();
// Link Embed Objects to file
const embeds = {
    // Fun Commands
    fun: {
        flame: require("./events/Embeds/flame"),
        death: require("./events/Embeds/death"),
        epic: require("./events/Embeds/epic"),
        horny: require("./events/Embeds/horny"),
        jameskii: require("./events/Embeds/jameskii"),
        spade: require("./events/Embeds/spade"),
        amongus: require("./events/Embeds/amongus"),
    },
    // Other Commands
    version: require("./events/Embeds/version"),
};
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Myself Being rewritten by nondumasses', { type: 'WATCHING' }).catch(console.error);
});

const prefix = config.prefix;

client.on("message", message => {
        // Only Respond to messages with the prefix
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

        // Fun Commands
    if(command ==="flame") {
        return message.channel.send({ embed: embeds.fun.flame.embed }).catch(console.error);
    }

    if(command ==="version") {
        return message.channel.send({ embed: embeds.version.embed }).catch(console.error);
    }

    if(command ==="spade") {
        return message.channel.send({ embed: embeds.fun.spade.embed }).catch(console.error);
    }

    if(command ==="jameskii") {
        return message.channel.send({ embed: embeds.fun.jameskii.embed }).catch(console.error);
    }

    if(command ==="horny") {
        return message.channel.send({ embed: embeds.fun.horny.embed }).catch(console.error);
    }

    if(command ==="epic") {
        return message.channel.send({ embed: embeds.fun.epic.embed }).catch(console.error);
    }
    
    if(command ==="amongus") {
        return message.channel.send({ embed: embeds.fun.amongus.embed }).catch(console.error);
    }

});

client.login(config.token);
