const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gun',
    description: 'a test',
    execute(message, args) {
            // We can create embeds using the MessageEmbed constructor
            // Read more about all that you can do with the constructor
            // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
            const embed = new MessageEmbed()
              // Set the title of the field
              .setTitle('>:)')
              // Set the color of the embed
              .setColor(0xff0000)
              // Set the main content of the embed
              .setDescription('I CALL SHOTGUN >:3');
            // Send the embed to the same channel as the message
            message.channel.send(embed);
    }
}