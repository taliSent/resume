# Use an official Node runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY public ./public 
COPY src ./src
COPY tsconfig.json ./

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]
