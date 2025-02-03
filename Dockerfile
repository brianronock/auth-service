# # Step 1: Build Stage
# FROM node:18-alpine AS builder

# # Set the working directory
# WORKDIR /auth-service

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Step 2: Final Stage - Only Copy Necessary Files
# FROM node:18-alpine

# # Set the working directory
# WORKDIR /app

# # Copy only the built files and dependencies from the builder stage
# COPY --from=builder /app/node_modules /app/node_modules
# COPY --from=builder /app/package*.json ./

# # Expose the port
# EXPOSE 5003

# # Run the application
# CMD ["npm", "start"]



# Use the official Node.js 18 Alpine image as base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage caching)
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5003

# Command to run the application in development mode
CMD ["npm", "start"]