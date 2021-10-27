const { MessageButton, MessageActionRow } = require('discord-buttons');
let btn4 = new MessageButton().setLabel("Moar Wob!").setStyle("blurple").setID("More-wobs");


const embed = {
    "title": "Wob Generator!",
    "description": "1 wob coming right up!",
    "color": 15046153,
    "footer": {
        //ADD WOBROLLING GIF HERE
        "icon_url": "",
        "text": "Ha he roll"
    },
    "image": {
        //SAME GIF HERE
        "url": ""
    }
};
module.exports.embed = embed