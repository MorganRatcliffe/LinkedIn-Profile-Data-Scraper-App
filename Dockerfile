# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy everything into container
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
