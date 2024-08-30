FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
RUN npm run build
RUN ["rm", "-rf", "node_modules"]
CMD ["npm", "start"]