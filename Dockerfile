FROM node:18-bullseye

# Install dependencies Playwright browsers need
RUN apt-get update && apt-get install -y \
    wget curl gnupg ca-certificates \
    libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
    libdrm2 libdbus-1-3 libxkbcommon0 libxcomposite1 libxdamage1 \
    libxrandr2 libgbm1 libxss1 libasound2 libxshmfence1 \
    libx11-xcb1 libxcursor1 libxfixes3 libxi6 libxrender1 libxtst6 \
    libgtk-3-0 libgtk-4-1 libgdk-pixbuf2.0-0 libpango-1.0-0 libcairo2 \
    libgstreamer1.0-0 libgstreamer-plugins-base1.0-0 libglib2.0-0 \
    libvpx7 libevent-2.1-7 libdw1 libunwind8 libopus0 \
    fonts-liberation fonts-noto-color-emoji fonts-freefont-ttf \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci

# Install ONLY browsers (no --with-deps)
RUN npx playwright install

COPY . .

CMD ["npx", "playwright", "test"]
