import { ChatGPTAPI } from 'chatgpt';
import * as dotenv from 'dotenv';
import { Telegraf } from 'telegraf';

dotenv.config();

const test = '';

if (!process.env.BOT_TOKEN || !process.env.OPENAI_API_KEY) {
    throw new Error('Bot token or chatgpt doesn`t exists');
}

const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
});

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('chatbot', async (ctx) => {
    const messageFromGroup = ctx.message.text.replace('/chatbot', '');

    const answerFromGpt = await api.sendMessage(messageFromGroup);

    ctx.reply(answerFromGpt);
});

bot.launch();
