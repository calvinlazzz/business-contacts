FROM node

WORKDIR /app

# Only copy package.json and package-lock.json first for better caching
COPY package.json ./
RUN npm install

# Copy only the built files and server.js
COPY dist ./dist
COPY server.js ./

EXPOSE 1234

CMD ["node", "server.js"]