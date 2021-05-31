const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Myself Being rewritten by nondumasses', { type: 'WATCHING' }).catch(console.error);
});

const prefix = "-";

client.on("message", message => {

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command ===)

});

client.login('ODQ4NzcwMjg5MjM5MDY0NjE4.YLRc7g.yZ3aKDn0CqJnR2L63e5O7w9iWpI');
