# Stage 1: Build React App
FROM node:18-alpine AS build
WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install

# copy source code 
COPY . .

# Build React app
RUN npm run build

# Check build output
RUN ls -l /app/build

# Stage 2: Serve React App with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
