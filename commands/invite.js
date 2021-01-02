const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**PreoMusic**`)
      .setDescription(


`<a:arrow_lo:777773511791083530> **Invite me with Normal Perms [(Click Here)](https://discord.com/oauth2/authorize?client_id=786866748355510273&permissions=${permissions}&scope=bot)**

<a:arrow_lo:777773511791083530>  **Invite me with Admin Perms [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=786866748355510273&permissions=8&scope=bot)**





        <a:arrow_lo:777773511791083530> Invite PreoMusic 1 [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=774642458889814066&permissions=8&scope=bot)

        <a:arrow_lo:777773511791083530> Invite Our Official PreoMusic 2 [(Click Here)](https://discord.com/oauth2/authorize?client_id=783231563580047360&permissions=8&scope=bot)
       
        <a:arrow_lo:777773511791083530> Invite Our Official Preo Bot [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=761849114803044362&permissions=8&scope=bot)`

      
      
        
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=774642458889814066&permissions=${permissions}&scope=bot`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};



console.log("invite working")