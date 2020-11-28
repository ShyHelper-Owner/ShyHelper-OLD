const Discord = require('discord.js')

module.exports = {
	name: 'lock',
    description: 'scary boi',
	async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You dont have perms');
        if (!args[0]) return message.channel.send('State a Place (Basically you didn\'t mention a channel)');
        if (!message.mention.channel.first()) return message.channel.send('That was a invalid Channel(s)');

        const role = message.guild.roles.get('758409089041694720');
        if (!role) return message.channel.send('no role found');

        await message.mentions.channel.forEach(async channel => {
            if (!channel.name.endsWith(' 🔒')) return message.channel.send(`<#${channel.id}> ia already locked dummy`)
            await channel.setName(`${channel.name} 🔒`)
            try {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false
                });
                message.channel.send(`<${channel.id}> has been locked`)
            } catch (err) {
                console.log(err)
                message.channel.send('somethin\' ain\'t working')
            }
        });
	}
}