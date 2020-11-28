module.exports = {
    execute(message, args) {
        // Send the message to a designated channel on a server:
        const channel = member.guild.channels.cache.find(ch => ch.name.includes === 'welcome');
        // Do nothing if the channel wasn't found on this server
        if (!channel) return;
        // Send the message, mentioning the member
        channel.send(`Welcome to the server, ${member}`);
      }
}