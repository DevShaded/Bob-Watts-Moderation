'use strict';

// Import dotenv to load environment variables
import 'dotenv/config';

// Import Discord.js
import { Client, Intents } from 'discord.js';

// Create a new client instance
const client = new Client({
	// Necessary intents permissions
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
		Intents.FLAGS.GUILD_INTEGRATIONS,
		Intents.FLAGS.GUILD_WEBHOOKS,
		Intents.FLAGS.GUILD_INVITES,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.GUILD_PRESENCES,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_MESSAGE_TYPING,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING
	],

	partials: [
		'MESSAGE',
		'CHANNEL',
		'REACTION'
	],

	allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
});

// Emit when the client becomes ready to start working.
client.once('ready', async () => {
	console.log('\x1b[32mBot has succesfully signed in and is listening to events\x1b[0m');

	await client.user.setActivity('the bad people', { type: 'WATCHING' });
});

// Emit when an interaction is created
client.on('interactionCreate', async (interaction ) => {
	if (!interaction.isCommand()) return;

	console.log(interaction)
});

// Emit whenever a message is created
client.on('messageCreate', async (message) => {
	if (message.author.bot || message.webhookId === typeof null) return;

	console.log(message.content);
});

// Login to Discord with your client's token
switch (process.env.APP_ENV) {
	case 'development':
		client.login(process.env.APP_TOKEN).then(() => {
			console.log('\x1b[33mBot is trying to sign in as DEVELOPER\x1b[0m');
		})
		break
	case 'production':
		client.login(process.env.APP_TOKEN).then(() => {
			console.log('\x1b[36mBot is trying to sign in as PRODUCTION\x1b[0m');
		})
		break
	default:
		console.error('Environment has not been set up correctly');
}