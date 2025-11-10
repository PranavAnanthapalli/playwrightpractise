# ✅ Use latest Playwright-supported OS with browsers preinstalled
FROM mcr.microsoft.com/playwright:v1.56.1-jammy

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY playwright.config.ts ./

# Install dependencies
RUN npm install

# Copy the remaining project files
COPY . .

# ✅ Increase shared memory for Chromium
# Run tests by default
CMD ["npx", "playwright", "test", "--project=chromium"]
