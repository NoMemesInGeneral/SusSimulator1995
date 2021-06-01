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
    console.log('All 40k of Ram is Smooth!');
    client.user.setActivity('Myself Being rewritten by nondumasses', { type: 'WATCHING' }).catch(console.error);
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
    if(command === "flame") {
        return message.channel.send({ embed: embeds.fun.flame.embed }).catch(console.error);
    }

    if(command === "spade") {
        return message.channel.send({ embed: embeds.fun.spade.embed }).catch(console.error);
    }

    if(command === "jameskii") {
        return message.channel.send({ embed: embeds.fun.jameskii.embed }).catch(console.error);
    }

    if(command === "horny") {
        return message.channel.send({ embed: embeds.fun.horny.embed }).catch(console.error);
    }

    if(command === "epic") {
        return message.channel.send({ embed: embeds.fun.epic.embed }).catch(console.error);
    }
    
    if(command === "amongus") {
        return message.channel.send({ embed: embeds.fun.amongus.embed }).catch(console.error);
    }

  //IF THE FIRST WORD IS gif THEN THE BOT HAS TO FETCH GIF RESULTS BASED ON THE NEXT WORDS
  if (command === "gif") {
      console.log(args.length)
      console.log(args)
    //WE WILL COMBINE THE WORDS WHICH HAS BEEN SPLITTED EXPECT THE FIRST WORD
    const keywords = args.slice(1, args.length).join(" ");
    console.log(keywords)
    //NOW THIS IS THE API ENDPOINT FROM WHICH WE WILL RECEIVE THE GIFS
    //HERE WE WILL GET 10 GIFS FROM THIS YOU CAN CHANGE IT YOU WANT
    const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${config.tenor}&limit=10`;
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
        
        let btn1 = new MessageButton().setLabel("Fun").setStyle("blurple").setID("fun-help");
        let btn2 = new MessageButton().setLabel("Infomation").setStyle("blurple").setID("info-help");
        let btn3 = new MessageButton().setLabel("Credits").setStyle("blurple").setID("credits");
        let buttonRow = new MessageActionRow().addComponent(btn1).addComponent(btn2).addComponent(btn3)

        //IF no Argument is made, Show the help home menu. (also this also will get messy)
        if (args.length < 1) return message.channel.send({component: buttonRow, embed: embeds.help.home.embed },).catch(console.error);
    }
});

//Click Button Handler
client.on('clickButton', async (button) => {
    if(button.id === 'fun-help') {
        button.message.channel.send("test");
    }
    if(button.id === 'info-help') {
        button.message.channel.send("test");
    }
    if(button.id === 'credits') {
        button.defer();
        return button.message.channel.send({ embed: embeds.version.embed });
    }
});

client.login(config.token);
