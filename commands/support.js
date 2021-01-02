const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "support",
  aliases: ["bug","suggest","suggestion","report"],
  description: "To get support server of bot or report some issue (bug)",
  execute(message, args) {
   
    let support = new MessageEmbed()
      .setTitle(`**Support**`)
      .setDescription(
          
        `Support for PreoMusic,
        

        Join our support server [CLICK HERE](https://discord.gg/BC54rQa9c9)`
        
      )
      .setURL(
        `https://discord.gg/BC54rQa9c9`
      )
      .setColor("RED");
    return message.channel.send(support);
  }
};


console.log("Support working")