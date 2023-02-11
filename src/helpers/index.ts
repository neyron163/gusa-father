import type { CommandsType, CtxType } from '../types';

// Список команд для которых нужно возвращать сообщение "Введите сообщение"
const COMMANDS: CommandsType[] = ['chatbot'];

export const handleMessageFromUser = (ctx: CtxType, command: CommandsType): string => {
    const message = ctx.message.text.replace(`/${command}`, '');

    if (COMMANDS.includes(command) && !message) {
        ctx.reply('Введите сообщение');
        return '';
    }

    return message;
};
