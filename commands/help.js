const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "h",
  aliases: ["help"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} Help`)
      .setDescription("__**This are the commands of PreoMusic 3**__ <a:music_02:783975631196258324> ")
      .setColor("RED")
      .setTimestamp();
      
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};


console.log("help working")