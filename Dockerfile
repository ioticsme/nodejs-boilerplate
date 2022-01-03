FROM node:14.17.0-alpine as base

WORKDIR /src
COPY . .
COPY package*.json ./
COPY package-lock.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci --only=production
CMD ["npm", "start"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
# RUN npm install -g nodemon
# CMD sh -c 'npm install && npm run dev'
CMD ["npm", "run", "dev"]