import Context, { NarrowedContext } from 'telegraf/typings/context';
import { Message, Update } from 'telegraf/typings/core/types/typegram';

import { DATA } from '../data';
import { api } from '../instances';

export default async (
    ctx: NarrowedContext<
        Context<Update>,
        {
            message: Update.New & Update.NonChannel & Message.TextMessage;
            update_id: number;
        }
    >,
) => {
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
};
