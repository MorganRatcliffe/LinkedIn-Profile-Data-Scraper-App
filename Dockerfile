# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy rest of the app
COPY app/ .

# Expose the default port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
