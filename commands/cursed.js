const Discord = require('discord.js');

module.exports = {
	name: 'cursed',
    description: 'a cursed GIF',
    type: "fun",
	execute(message, args) {
		message.channel.send('https://tenor.com/view/not-gif-7224354');
	}
}