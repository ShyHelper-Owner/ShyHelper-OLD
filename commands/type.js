const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: "help2",
    description: "da help",
    execute(message, args) {
        const embed = new MessageEmbed()
        // Set the title of the field
        .setAuthor(message.author.username)
        .setTitle('Help Page 2 | Command Info')
        // Set the color of the embed
        .setColor(0xff0000)
        .setFooter('📌 Page 2/3')
        // Set the main content of the embed
        .setDescription('**Say command**\n The say command will make shyhelper say anything you want it to say\n (Still Being worked on!)');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
}