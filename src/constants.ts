import * as dotenv from 'dotenv';

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const COMMANDS = {
    CHATBOT: 'chatbot',
    DEPLOY: 'deploy',
} as const;
export const OPTIONS = { encoding: 'utf-8' } as const;
