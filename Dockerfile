FROM mcr.microsoft.com/playwright:v1.56.1-jammy  # ← Updated version

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
CMD ["npx", "playwright", "test", "--project=chromium"]
