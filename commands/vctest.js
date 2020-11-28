const discord = require('discord.js');

module.exports = {
    name: 'voicetest',
    description: 'scary boi',
    async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const ytdl = require('ytdl-core');
            connection.play(ytdl('https://www.youtube.com/watch?v=0jfU7pw76ZE', { filter: 'audioonly' }));

            // Files on the internet
            connection.play('http://www.sample-videos.com/audio/mp3/wave.mp3');

            // Local files
            connection.play('/home/discord/audio.mp3');
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
};