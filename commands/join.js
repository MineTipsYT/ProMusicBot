const distube = require('../index.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "join",
    aliases: ["j", "247", "24/7", "24x7"],
    description: "Join your VC for 27/7",
    async execute(message, args) {
        const { channel } = message.member.voice;
    
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error);
        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.reply(`You must be in the same channel as ${message.client.user}`).catch(console.error);

            await message.member.voice.channel.join()
        }
    }


    console.log("Join working")