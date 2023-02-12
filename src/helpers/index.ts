import puppeteer from 'puppeteer';

import { RU_ALPHABET } from './constants';

export const translateText = async (text: string) => {
    try {
        const isRussian = text.split('').some((el) => RU_ALPHABET.find((w) => w === el.toLowerCase()));
        if (!isRussian) return text;
        // для теста добавить в launch { headless: false })
        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
        });
        const page = await browser.newPage();

        await page.goto('https://translate.google.com/');

        await page.setViewport({ width: 1080, height: 1024 });

        await page.focus('textarea');
        await page.keyboard.type(text);
        await page.waitForTimeout(2000); // @TODO deprecated
        const rusText = await page.evaluate(() => {
            const textArea = document.querySelector('[aria-live="polite"]');
            const span1 = textArea?.querySelector('span');
            const span2 = span1?.querySelector('span');
            const span3 = span2?.querySelector('span');

            if (span3) {
                return span3.textContent;
            }
            return '';
        });

        await browser.close();
        return rusText || text;
    } catch (error) {
        console.error(error);
        return text;
    }
};
