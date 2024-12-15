# Dockerfile

# Step 1: Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package*.json ./

# Step 4: Install the Angular CLI globally and project dependencies
RUN npm install -g @angular/cli@17.x.x && npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Angular application
RUN ng build --configuration production

# Step 7: Use an NGINX image to serve the app
FROM nginx:alpine

# Step 8: Copy the built files from the previous stage
COPY --from=build /app/dist/integra-app/browser /usr/share/nginx/html

# Step 9: Expose the default NGINX port
EXPOSE 80

# Step 10: Start NGINX
CMD ["nginx", "-g", "daemon off;"]
