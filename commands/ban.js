//Lets go into the ban bois

module.exports = {
    name: 'ban',
    description: 'want some φ(゜▽゜*)♪ mem cakes?',
    type: 'moderation',
    execute(message, args) {
  
      if (message.member.hasPermission('BAN_MEMBERS')) {
        const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban that Shyguy');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That Shyguy isn\'t in our Tribe!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('You didn\'t mention a Shyguy to ban!');
      }
    } else {
      message.reply('You dont have perms')
    }
  }}