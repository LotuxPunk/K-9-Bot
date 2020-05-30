const Discord = require('discord.js');
const {issue} = require('../config.json');

module.exports = {
	name: 'issue',
    description: 'Explain issue stuff',
	execute(message, args) {
		const issueEmbed = new Discord.MessageEmbed()
            .setColor('#674DFF')
            .setTitle('I have an issue with the mod')
            .setURL('https://gitlab.com/Spectre0987/TardisMod-1-14/-/issues/')
            .setAuthor('The TARDIS Team')
            .setDescription(issue)
            .setTimestamp()
            .setFooter('K-9', 'https://cdn.discordapp.com/avatars/526454256463773696/c53ffec71b8804b90ed76d986ea3d67c.png');                    
        message.channel.send(issueEmbed);
	},
};