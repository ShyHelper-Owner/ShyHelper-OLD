const fetch = require('node-fetch');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'meme',
    description: "says a messages inputted",
    async execute(message, args) {
	  fetch('https://meme-api.herokuapp.com/gimme')
		  .then(res => res.json())
		  .then(async json => {
			  let msg = await message.channel.send('YA GOT IT FAM')
			  const memeEmbed = new MessageEmbed()
				  .setTitle(json.title)
				  .setImage(json.url)
				  .setFooter(`Link: ${json.postLink} | SubReddit: ${json.subreddit}`)
				  .setColor(0xff0000);

			    msg.edit(memeEmbed);
		    });
    }
  }
  