module.exports = {
	name: 'ping',
    description: 'Should be obvious.',
    usage: '',
    guildonly: false,
    devonly: false,
    args: false,
    modCommand: false,
	execute(message, args) {
        return message.channel.send(`Ping: \`${Math.floor(message.client.ping)}ms\``)
    },
};