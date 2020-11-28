const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'minecraft',
    aliases: ['mc'],
    description: 'a test',
    execute(message, args) {
            // We can create embeds using the MessageEmbed constructor
            // Read more about all that you can do with the constructor
            // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
            const embed = new MessageEmbed()
              // Set the title of the field
              .setTitle('My Minecraft Server')
              // Set the color of the embed
              .setColor(0xff0000)
              .setFooter('📌 Minecraft Discord Server: https://discord.gg/mqADsJN')
              // Set the main content of the embed
              .setDescription('My Minecraft server is hosted by another bot which ill give a oauth2 ( NzU5ODgzMjgyMTQ5NDA4ODA5.X3D-dA.4rr8YgEpustu4QJVaTFfZ95xpwQ ) and ill be in it when its on (bc i use a free minecraft server thing and im poor) and if you want it on tell me');
            // Send the embed to the same channel as the message
            message.channel.send(embed);
    }
}