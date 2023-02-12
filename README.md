#

## Settings

Before start app, you should pass env: `BOT_TOKEN` and `OPENAI_API_KEY`

```bash
# 1. Copy file: `.env.dist`
cp .env.dist .env
```

```bash
# 2. Install dependencies
npm install
```

```bash
# 3. Up container
docker-compose up
```

## Use

```sh
# Install dependencies
npm install
```

```sh
# Build
npm run build
```

```sh
# Run lint
npm run eslint lint
```

```sh
# Fix lint errors
npm run eslint:fix
```

```sh
# Run app
npm start
```

## Docker

We ran the following commands to build the dev and the production images:

```sh
docker build . -t bot-dev --target=dev
docker build . -t bot-prod --target=production
```

You can run prod build like this:

```sh
docker run -d --env-file=.env bot-prod
```

## Puppeteer deps

[Issues-3443](https://github.com/puppeteer/puppeteer/issues/3443)

```sh
sudo apt-get install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
sudo apt install ca-certificates fonts-liberation libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

```
