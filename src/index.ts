import chatbot from './commands/chatbot';
import deploy from './commands/deploy';
import { COMMANDS } from './constants';
import { bot } from './instances';

bot.command(COMMANDS.CHATBOT, chatbot);
bot.command(COMMANDS.DEPLOY, deploy);

bot.launch();
