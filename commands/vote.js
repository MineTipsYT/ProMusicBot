
const { MessageEmbed } = require("discord.js");
const { COLOR } = require('../config.json');
const { EMOJI_DONE } = require('../config.json');

module.exports = {
  name: "vote",
  aliases: ["voted"],
  description: "To get vote link of our bot , please vote us!",
  execute(message, args) {
   
    let vote = new MessageEmbed()
      .setTitle(`**Vote**`)
      .setDescription(
        

        `Vote me please!\n\nLink: [Click Here](https://top.gg/bot/774642458889814066/vote) Thanks on advance`
        
      )
      .setURL(
        `https://top.gg/bot/774642458889814066/vote`
      )

      
      .setColor(COLOR);
    return message.channel.send(vote) , message.react(EMOJI_DONE);
       
  }

};
console.log("vote working")