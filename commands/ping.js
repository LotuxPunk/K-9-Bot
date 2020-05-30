module.exports = {
	name: 'ping',
    description: 'Hey K9!',
	execute(message, args) {
		message.channel.send(`Pong ${message.author.username}`);
	},
};
