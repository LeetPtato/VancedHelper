const Discord = require('discord.js');
module.exports = {
	name: 'download',
    description: 'Sends all the official download mirrors.',
    usage: ' ',
    aliases: ['mirrors', 'links', 'sources', 'dl'],
	execute(message, args) {
        const output = new Discord.RichEmbed()
        .setColor('e5460e')
        .addField('Discord', 'Just download from <#517803059821281280>', false)
        .addField('Official Website', '[Vanced.app](https://vanced.app/nonroot)', false)
        .addField('AndroidFileHost', '[Youtube Vanced](https://androidfilehost.com/?w=files&flid=294874) - [Vanced MicroG](https://androidfilehost.com/?w=files&flid=294875)', false)
        .addField('Mediafire', '[Youtube Vanced](https://www.mediafire.com/folder/773e97cz2ezx1/AddFree_Youtube_BackgroundPlay_Enabled#tipud73tn4lo1) - [Vanced MicroG](https://www.mediafire.com/folder/773e97cz2ezx1/AddFree_Youtube_BackgroundPlay_Enabled#qdy8ps6d9sho7)', false)
        .setThumbnail('https://i.imgur.com/mFkZnUB.png')
        .setTitle('Official Mirrors')
        .setTimestamp()
        return message.channel.send(output)
    },
};