# Use official Playwright image with all browsers
FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Ensure all browsers are installed
RUN npx playwright install

COPY . .

CMD ["npx", "playwright", "test"]
