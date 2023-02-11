import { DATA } from '../data';
import { api } from '../instances';
import { handleMessageFromUser } from '../helpers';
import { COMMANDS } from "../constants";
import type { CtxType } from '../types';

export default async (ctx: CtxType) => {
    const messageFromGroup = handleMessageFromUser(ctx, COMMANDS.CHATBOT);

    if (!messageFromGroup) return;

    const currentUserId = ctx.from.id;
    const currentUseData = DATA.users[currentUserId];

    try {
        const answerFromGpt = await api.sendMessage(
            messageFromGroup,
            currentUseData && {
                conversationId: DATA.users[currentUserId].cId,
                parentMessageId: DATA.users[currentUserId].pId,
            },
        );

        DATA.users = { ...DATA.users, [ctx.from.id]: { cId: answerFromGpt.conversationId, pId: answerFromGpt.id } };

        return ctx.reply(answerFromGpt);
    } catch (error) {
        return ctx.reply(`Что-то пошло не так...${error}`);
    }
};
