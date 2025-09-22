# Dockerfile (small, production-ready pattern)
FROM node:18-alpine AS base
WORKDIR /app
# copy package manifests and install only dependencies (better cache)
COPY package*.json ./
RUN npm ci --production
# copy app sources
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
