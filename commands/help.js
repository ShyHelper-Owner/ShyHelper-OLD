const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: "help",
    description: "da help",
    execute(message, args) {
        const embed = new MessageEmbed()
        // Set the title of the field
        .setAuthor(message.author.username)
        .setTitle('Help Page 1 | Commands')
        .setFooter('📌 Page 1/3 | Type shyhelp2 and shyhelp3 for other pages')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('help <command>` to view help on a specific command.\nThese are **[**required**]** and **<**optional**>** fields.\n **Moderation**\n lock\n unlock\n kick\n ban\n **Fun**\n say\n gun\n scery\n cursed\n meme\n **Info**\n minecraft\n creator\n version\n help\n test\n type\n help2\n help3\n **Not Working**\n lock\n unlock\n Suggest a command pls too\n also the prefix is **[**Shy**]**');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
}