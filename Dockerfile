# Base build
FROM node:19-alpine AS base

ENV CHROME_BIN=/usr/bin/chromium-browser

ENV PATH=/app/node_modules/.bin:$PATH

# Puppeteer deps
RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@edge \
      nss@edge

WORKDIR /app

# Build dist
FROM base as build

ENV NODE_ENV=production

COPY . .

RUN npm ci

RUN npm run build

# Build for production
FROM node:19-alpine as production

WORKDIR /app

COPY --from=build /app/dist ./

CMD ["node","index.js"]


# Build for develop
FROM base as development

ENV NODE_ENV=development

WORKDIR /app