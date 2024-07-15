FROM node:18-alpine 
WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install

# copy source code 
COPY . .

#Build React app
RUN npm run build

# Use Nginx as a web server to serve teh React App
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# runs the development server for testing

#to run code locally
# EXPOSE 3000
# CMD ["npm", "run", "dev"]