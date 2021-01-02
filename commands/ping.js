module.exports = {
  name: "ping",
  aliases: ["pong"],
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
    message.reply(`<a:dot:777814511423455243> Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};


console.log("Ping working")