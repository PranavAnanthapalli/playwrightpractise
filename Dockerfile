FROM mcr.microsoft.com/playwright:v1.48.0-jammy

# Fix DNS to avoid timeout in Docker
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Install only chromium browsers
RUN npx playwright install chromium

# Extra dependencies (fixes crashes)
RUN apt-get update && apt-get install -y curl

# Run tests ONLY on chromium
ENTRYPOINT ["npx", "playwright", "test", "--project=chromium"]
