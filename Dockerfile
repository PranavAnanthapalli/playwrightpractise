FROM mcr.microsoft.com/playwright:v1.48.0-jammy

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Install only chromium browser
RUN npx playwright install chromium

# Extra dependencies (fixes crashes)
RUN apt-get update && apt-get install -y curl

# Run tests ONLY on chromium
ENTRYPOINT ["npx", "playwright", "test", "--project=chromium"]
