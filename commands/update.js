const Discord = require('discord.js');

module.exports = {
	name: 'update',
    description: 'Explain update stuff',
	execute(message, args) {
		const updateEmbed = new Discord.MessageEmbed()
            .setColor('#674DFF')
            .setTitle('When is the update coming?')
            .setAuthor('The TARDIS Team')
            .setDescription("*WHEN IT'S READY !*")
            .setImage('https://media.giphy.com/media/C1Fdach2R4HSg/giphy.gif')
            .setTimestamp()
            .setFooter('K-9', 'https://cdn.discordapp.com/avatars/526454256463773696/c53ffec71b8804b90ed76d986ea3d67c.png');                    
        message.channel.send(updateEmbed);
	},
};