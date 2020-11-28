const { Client, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'help3',
    description: 'scary boi',
	execute(message, args) {
        const embed = new MessageEmbed()
        .setAuthor(message.author.username)
        .setTitle('Help Page 3 | Rules')
        // Set the color of the embed
        .setColor(0xff0000)
        .setFooter('📌 Page 3/3 | all of these rules are in the support server https://discord.gg/h4f4jjR')
        // Set the main content of the embed
        .setDescription('**1. Bee (haha bee pun) nice to others in the support room**\n Doing the opposite Will result in a 15m temp mute, Be nice to others and they\'ll bee (another bee pun) nice to you! :3 Doing The Opposite to the Staff Will result in a Warning\n **2. No NSFW**\n No NSFW(Not safe for Work) cause we are a family Friendly Society, Use your Friendly Words Please(Yes i know you have them). Doing The Opposite will result in a 30m Temp Mute.\n **3. Spamming Our bots is not cool**\n Please dont spam The Commands I dont want to do a lockdown(Lockdown command will come in the Future @Admin\'s )\n **4. Dont Abuse your Permissions**\n For example, the nicking people without their permission with the Manage Nickname permission.This mainly applies to staff. Doing so will result in a kick\n **5.(Breaths in) LINKS**\n If you Want to Post a Link(like Minecraft server, Merch, discord server etc.) Please ask a Moderator. If a Discord server partnership for our server Dm a Admin(or  a owner) and your server must have atleast 10 members(not including bots)\n **6. Language**\n Try only to speak English as we can\'t moderate languages we don\'t understand. (you wont get warned, muted, or kicked but do so in #⌨random - talk - 2  Please)\n **7. Commands**\n All bot - related commands are to be done in the #🕹bot - control - lounge l, failure to do so will result in a verbal warn, and then an infraction.\n **8. Pinging**\n Do not use the @everyone / @ here ping without permission; this only applies to members that have access to this ability. If you are pinging a moderator Thats fine but if its just for a joke that will result in a 1h temp mute');
        message.channel.send(embed);
    }
}