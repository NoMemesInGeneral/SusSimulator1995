
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('PornHub', { type: 'WATCHING' }).catch(console.error);
});

const prefix = "-";

client.on("message", message => {

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    
    if (command === "horny") {
        const embed = new Discord.MessageEmbed()
            .setTitle("No more horny **bonk**")
            .setImage("https://cdn.glitch.com/cea454cd-5411-4661-85dd-a0328992ca29%2Ftenor%20(6).gif?v=1621365206368")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)


    }
    if (command === "epic") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Epic embed fail")
            .setImage("https://cdn.glitch.com/cea454cd-5411-4661-85dd-a0328992ca29%2Ftenor%20(7).gif?v=1621365999165")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)
    }

    if (command === "flame") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Delete your post :neutral_face:")
            .setImage("https://cdn.glitch.com/cea454cd-5411-4661-85dd-a0328992ca29%2Fgiphy%20(5).gif?v=1621367315251")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)
    }

    if (command === "spade") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Admit it :neutral_face:")
            .setImage("https://cdn.discordapp.com/attachments/817552185809829912/844674974480597022/tenor_8.gif")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)
    }


    if (command === "jameskii") {
        const embed = new Discord.MessageEmbed()
            .setTitle("jameskii is hot :weary: :gun:")
            .setImage("https://cdn.discordapp.com/attachments/844677068260507678/844677117295984680/hqdefault.png")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)
    }


    if (command === "death") {
        const embed = new Discord.MessageEmbed()
            .setTitle("***DEATH***")
            .setImage(" https://cdn.discordapp.com/attachments/817552185809829912/844681071530737722/tenor_9.gif")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)
    }



    if (command === "AMONG US") {
        const embed = new Discord.MessageEmbed()
            .setTitle("GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD GET OUT OF MY HEAD")
            .setImage("https://cdn.discordapp.com/attachments/817552185809829912/844716071444545586/tenor_11.gif")
            .setColor("RANDOM")
            .setFooter("SusBot V.1")
        message.channel.send(embed)
    }



    if (command === "roll") {
        function doRandHT() {
            var rand = ['You rolled the die and got a 1', 'You rolled the die and got a 2', 'You rolled the die and got a 3', 'You rolled the die and got a 4', 'You rolled the die and got a 5', 'You rolled the die and got a 6'];

            return rand[Math.floor(Math.random() * rand.length)];
        }

        const embed = {
            "title": `Wanna prize or what :neutral_face:`,
            "description": doRandHT(),
            "color": 4236514,
        };
        message.channel.send({ embed });


    };








    });

client.login('ODQ4NzcwMjg5MjM5MDY0NjE4.YLRc7g.yZ3aKDn0CqJnR2L63e5O7w9iWpI');