import { execSync } from 'child_process';

import { OPTIONS } from '../constants';
import type { CtxType } from '../types';

export default async (ctx: CtxType) => {
    await ctx.reply('Запускаю, ожидайте');
    const gitPullOutput = execSync('git pull', OPTIONS);
    const output = execSync('npm run build', OPTIONS);
    if (output) {
        ctx.reply(gitPullOutput);
    }
};
