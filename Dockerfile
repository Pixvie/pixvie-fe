FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run lint && npm run build

FROM nginx:1.23-alpine
ENV VUE_APP_API_SERVER=http://pixvie.tech/api
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/default.conf /etc/nginx/conf.d/



