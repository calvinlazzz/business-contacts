FROM node
ENV NODE_ENV=development
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3009
CMD [ "node", "server.js" ]