
module.exports = {
    name: 'say',
    description: "says a messages inputted",
    usage: "ping",
    execute(message, args) {
      const sayMessage = args.join(" ");
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessage);
    }
  }
  