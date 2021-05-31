const Discord = require('discord.js');
const config = require('./const.json');
const client = new Discord.Client();
const embeds = {
    fun: {
        flame: require("./events/Embeds/flame"),
    },
    version: require("./events/Embeds/version"),
};
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Myself Being rewritten by nondumasses', { type: 'WATCHING' }).catch(console.error);
});

const prefix = "-";

client.on("message", message => {

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command ==="flame") {
        return message.channel.send({ embed: embeds.fun.flame.embed }).catch(console.error);
    }

    if(command ==="version") {
        return message.channel.send({ embed: embeds.version.embed }).catch(console.error);
    }

});

client.login(config.token);
