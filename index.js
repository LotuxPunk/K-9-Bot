const Discord = require('discord.js');
const fs = require('fs');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

const spectreID = "440215348126416897";
const fiftyID = "199861254641287168";
const mooseID = "486876514097299461";
const users = [spectreID, fiftyID, mooseID];

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	setInterval(function ramShow() {
		let ram = process.memoryUsage().heapUsed / 1024 / 1024;
		ram = Math.round(ram)
    	client.user.setActivity(`with RAM : ${ram} MB`, {type: "PLAYING"});
	}, 2000);
	
});

client.on('message', message => {
	// "Revenge"
	if(users.includes(message.author.id)){
		var d = Math.random();
		if(d < 0.05){
			switch (message.author.id) {
				case spectreID:
					message.react("🍺");
					break;
				case fiftyID:
					message.react("🐟");
					break;
				case mooseID:
					message.react("🎌");
					break;
				default:
					break;
			}
		}
	}
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName  = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);