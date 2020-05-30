const Discord = require('discord.js');
const {policebox} = require('../config.json');

module.exports = {
	name: 'policebox',
    description: 'Explain policebox stuff',
	execute(message, args) {
		const policeBoxEmbed = new Discord.MessageEmbed()
            .setColor('#674DFF')
            .setTitle('How to obtain the PoliceBox in 1.14.4')
            .setAuthor('The TARDIS Team')
            .setDescription(policebox)
            .setTimestamp()
            .setFooter('K-9', 'https://cdn.discordapp.com/avatars/526454256463773696/c53ffec71b8804b90ed76d986ea3d67c.png');                    
        message.channel.send(policeBoxEmbed);
	},
};