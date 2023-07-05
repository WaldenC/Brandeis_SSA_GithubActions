FROM node:16.20

# COPY controllers /app/
# COPY public /app/
# COPY views /app/
# COPY index.js /app/
# COPY package.json /app/

COPY . /app

WORKDIR /app

RUN npm install

CMD ["node", "index.js"]