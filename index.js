const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const ms = require('ms');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('Its on!')
    bot.user.setActivity('Gourmet Race', { type: 'PLAYING' })
        .then(presence => console.log(`Activity set to whatever it is`))
        .catch(console.error);
    bot.user.setStatus('dnd')
        .then(console.log)
        .catch(console.error);
})

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.allias && cmd.alliases.includes(commandName));


    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Uhm its not working or you typed an unknown command.');
    }
})

bot.login(token);