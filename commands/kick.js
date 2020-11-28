const Discord = require('discord.js');
const bot = new Discord.Client();

//Commands Here, I just Closed it
module.exports = {
  name: "kick",
  description: "Kicks a Member",
  type: 'moderation',
  execute(message, args) {
    if (message.member.hasPermission('KICK_MEMBERS')) {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('You broke the Shyguy law..').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick that Type of Shyguy');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That Shyguy isn\'t in this Tribe!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the Shyguy to kick!');
     }
    } else {
      message.reply('You dont have perms')
    }
  }
};