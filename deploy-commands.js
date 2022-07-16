import 'dotenv/config';
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const clientId = process.env.APP_CLIENTID;
const guildId = process.env.APP_GUILDID;
const appToken = process.env.APP_TOKEN;

// Will be worked on later
console.log(clientId, guildId);