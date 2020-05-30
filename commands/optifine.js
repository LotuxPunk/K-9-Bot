const Discord = require('discord.js');
const {optifine} = require('../config.json');

module.exports = {
	name: 'optifine',
    description: 'Explain optifine stuff',
	execute(message, args) {
		const optifineEmbed = new Discord.MessageEmbed()
            .setColor('#674DFF')
            .setTitle('What\'s wrong with Optifine ?')
            .setAuthor('The TARDIS Team')
            .setDescription(optifine)
            .setTimestamp()
            .setFooter('K-9', 'https://cdn.discordapp.com/avatars/526454256463773696/c53ffec71b8804b90ed76d986ea3d67c.png');                    
        message.channel.send(optifineEmbed);
	},
};