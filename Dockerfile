# Use Node.js base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
