import chatbot from './commands/chatbot';
import { bot } from './instances';

bot.command('chatbot', chatbot);

bot.launch();
