import { ChatGPTAPI } from 'chatgpt';
import { Telegraf } from 'telegraf';

import { BOT_TOKEN, OPENAI_API_KEY } from './constants';
import { DATA } from './data';

if (!BOT_TOKEN || !OPENAI_API_KEY) {
    throw new Error('Bot token or chatgpt doesn`t exists');
}

const api = new ChatGPTAPI({
    apiKey: OPENAI_API_KEY,
});

const bot = new Telegraf(BOT_TOKEN);

bot.command('chatbot', async (ctx) => {
    const messageFromGroup = ctx.message.text.replace('/chatbot', '');
    const currentUserId = ctx.from.id;
    const currentUseData = DATA.users[currentUserId];

    const answerFromGpt = await api.sendMessage(
        messageFromGroup,
        currentUseData && {
            conversationId: DATA.users[currentUserId].cId,
            parentMessageId: DATA.users[currentUserId].pId,
        },
    );

    DATA.users = { ...DATA.users, [ctx.from.id]: { cId: answerFromGpt.conversationId, pId: answerFromGpt.id } };

    ctx.reply(answerFromGpt);
});

bot.launch();
