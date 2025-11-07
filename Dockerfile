# Use the official Node.js image as the base
FROM mcr.microsoft.com/playwright:v1.39.0-focal

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Set the command to run Playwright tests
CMD ["npx", "playwright", "test"]
