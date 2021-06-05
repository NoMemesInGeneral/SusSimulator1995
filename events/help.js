const { MessageButton, MessageActionRow } = require('discord-buttons');
let btn1 = new MessageButton().setLabel("Fun").setStyle("blurple").setID("fun-help");
        let btn2 = new MessageButton().setLabel("Infomation").setStyle("blurple").setID("info-help");
        let btn3 = new MessageButton().setLabel("Credits").setStyle("blurple").setID("credits");
        let buttonRow = new MessageActionRow().addComponent(btn1).addComponent(btn2).addComponent(btn3)
const embed = {
    "title": "Help: Home Menu",
    "description": "Find all the commands you need.",
    "color": 5469965,
    "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/824709342447140866/849085995021369454/ventbot1997.png",
      "text": "Help Menu | Home"
    },
    "author": {
      "name": "SusSimulator1995 \n(invite link)",
        "url": "https://discord.com/api/oauth2/authorize?client_id=848770289239064618&permissions=8&scope=bot",
        "icon_url": "https://cdn.discordapp.com/attachments/824709342447140866/849085995021369454/ventbot1997.png"
    },
    "fields": [
      {
        "name": "Fun Commands!",
        "value": "Fun for the Whole Discord Server! (-help fun)",
        "inline": true
      },
      {
        "name": "Infomation Commands!",
        "value": "Get info on the bot, and other connected services. (-help info)",
        "inline": true
      },
      {
        "name": "Credits!",
        "value": "Check who made the thing in the first place! (-version)",
        "inline": true
      },
      {
      "name": "10 Print 'Placeholder!'",
              "value": "20 Goto 10\n(-test)",
      "inline": true
      }
    ]
}

module.exports.embed = embed
module.exports.component = buttonRow