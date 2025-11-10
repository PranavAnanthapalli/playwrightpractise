FROM node:18-bullseye

# Install ALL required dependencies for ALL browsers
RUN apt-get update && apt-get install -y \
    # Basic dependencies
    curl wget gnupg ca-certificates \
    \
    # Chromium dependencies
    libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
    libdrm2 libdbus-1-3 libxkbcommon0 libxcomposite1 libxdamage1 \
    libxrandr2 libgbm1 libxss1 libasound2 \
    \
    # Firefox dependencies
    libx11-xcb1 libxcursor1 libxfixes3 libxi6 libxrender1 libxtst6 \
    \
    # Webkit dependencies (updated for Playwright 1.56.1)
    libgtk-3-0 libgtk-4-1 libgdk-pixbuf2.0-0 libpango-1.0-0 libcairo2 \
    libgstreamer1.0-0 libgstreamer-plugins-base1.0-0 libglib2.0-0 \
    libopus0 libwoff1 libharfbuzz-icu0 libharfbuzz0b libenchant-2-2 \
    libsecret-1-0 libhyphen0 libmanette-0.2-0 libunwind8 libdw1 \
    libegl1 libglx0 libgudev-1.0-0 libjson-glib-1.0-0 libgles2 \
    libx264-160 libavif13 \
    \
    # Fonts
    fonts-liberation fonts-noto-color-emoji fonts-freefont-ttf \
    \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./

# Install Node.js dependencies (this installs Playwright 1.56.1)
RUN npm ci

# Install ALL Playwright browsers with dependencies
RUN npx playwright install --with-deps

COPY . .

CMD ["npx", "playwright", "test"]
