import { ChatGPTAPI } from 'chatgpt';
import { Telegraf } from 'telegraf';

import { BOT_TOKEN, OPENAI_API_KEY } from './constants';

if (!BOT_TOKEN || !OPENAI_API_KEY) {
    throw new Error('Bot token or chatgpt doesn`t exists');
}

export const api = new ChatGPTAPI({
    apiKey: OPENAI_API_KEY,
});

export const bot = new Telegraf(BOT_TOKEN);
