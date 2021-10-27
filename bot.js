// Importent Shit
const Discord = require('discord.js');
const config = require('./const.json');
const client = new Discord.Client();
const fetch = require("node-fetch");
require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require('discord-buttons');
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
        cola: require("./events/Embeds/cola"),
        chip: require("./events/Embeds/chip"),
        test: require("./events/Embeds/test embed"),
        wob: require("./events/Embeds/wob")
    },
    // Other Commands
    version: require("./events/Embeds/version"),
    //Help Menu (this will get messy)
    help: {
        home: require("./events/help"),
        fun: require("./events/Help/Fun"),
        info: require("./events/Help/info"),
    }
};
client.once('ready', () => {
    console.log('All 48k of Ram is Smooth!');
    console.log('Rewritten by Gman And Galaxion!')
    client.user.setActivity('Somehow being worked on again!', { type: 'WATCHING' }).catch(console.error);
});

const prefix = config.prefix;

client.on("message", async message => {
    // Only Respond to messages with the prefix

    if (message.content === "20goto10") {
        return message.channel.send("https://media.giphy.com/media/XbIoQQuFfFIirDn4A0/giphy.gif").catch(console.error);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Fun Commands
    if (command === "flame") {
        let btn1 = new MessageButton().setLabel("DELETE").setStyle("red").setID("Delete-flame");
        return message.channel.send({ embed: embeds.fun.flame.embed, component: btn1 }).catch(console.error);
    }

    if (command === "spade") {
        return message.channel.send({ embed: embeds.fun.spade.embed }).catch(console.error);
    }

    if (command === "test") {
        return message.channel.send({ embed: embeds.fun.test.embed }).catch(console.error);
    }

    if (command === "jameskii") {
        return message.channel.send({ embed: embeds.fun.jameskii.embed }).catch(console.error);
    }

    if (command === "horny") {
        return message.channel.send({ embed: embeds.fun.horny.embed }).catch(console.error);
    }

    if (command === "epic") {
        return message.channel.send({ embed: embeds.fun.epic.embed }).catch(console.error);
    }

    if (command === "amongus") {
        return message.channel.send({ embed: embeds.fun.amongus.embed }).catch(console.error);
    }
    if (command === "death") {
        return message.channel.send({ embed: embeds.fun.death.embed }).catch(console.error);
    }

    if (command === "cola") {
        return message.channel.send({ embed: embeds.fun.cola.embed }).catch(console.error);
    }

    if (command === "chip") {
        return message.channel.send({ embed: embeds.fun.chip.embed }).catch(console.error);
    }

    if (command === "wob") {
        return message.channel.send({ embed: embeds.fun.wob.embed }).catch(console.error);
    }

  //IF THE FIRST WORD IS gif THEN THE BOT HAS TO FETCH GIF RESULTS BASED ON THE NEXT WORDS
  //Wob here imma try and refign this a bit more. See if i can get it working better!
    if (command === "gif") {
      console.log(args.length)
      console.log(args)
    //WE WILL COMBINE THE WORDS WHICH HAS BEEN SPLITTED EXPECT THE FIRST WORD
    //DONT FUCKING CHANGE NUMBER | THAT ONE RIGHT FUCKING THERE
    const keywords = args.slice(0, args.length).join(" ");
    console.log(keywords)
    //NOW THIS IS THE API ENDPOINT FROM WHICH WE WILL RECEIVE THE GIFS
    //HERE WE WILL GET 10 GIFS FROM THIS YOU CAN CHANGE IT YOU WANT, Set it to 1 atm for testing
    const url = ` https://api.tenor.com/v1/search?q=${keywords}&key=${config.tenor}&limit=1 `;
    console.log(url)
    //FETCH THE RESULTS
    const response = await fetch(url);
    //CONVERT TO JSON
    const result = await response.json();
    //NOW WE CAN RANDOMLY SELECT THE GIF FROM THE RESULTS WE FETCHED
    const index = Math.floor(Math.random() * result.results.length);
    //NOW SEND THE RESULT BACK TO SERVER
    message.channel.send(result.results[index].url);
  }

    // Help and Bot Version commands

    if(command === "version") {
        return message.channel.send({ embed: embeds.version.embed }).catch(console.error);
    }

    if(command === "help") {
        // Add Button Funtions

        //IF no Argument is made, Show the help home menu. (also this also will get messy)
        if (args.length < 1) return message.channel.send({component: embeds.help.home.component, embed: embeds.help.home.embed }).catch(console.error);
    }
});

//Click Button Handler
client.on('clickButton', async (button) => {
    if(button.id === 'fun-help') {
        button.defer();
        button.message.channel.send({ embed: embeds.help.fun.embed});
    }
    if(button.id === 'info-help') {
        button.defer();
        button.message.channel.send({ embed: embeds.help.info.embed});
    }
    if(button.id === 'credits') {
        button.defer();
        return button.message.channel.send({ embed: embeds.version.embed });
    }
    if (button.id === 'Delete-flame') {
        button.think();
        setTimeout(function () {
            button.reply.delete();
            button.message.delete();
        }, 2000);
    }
    if (button.id === 'More-wobs') {
            button.think();
        setTimeout(function () {
            button.defer();
            return button.message.channel.send("TEST");
        }, 1000);
    }
});

client.login(config.token);
