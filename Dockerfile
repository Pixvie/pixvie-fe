FROM node:18-alpine AS builder
ARG VUE_APP_API_SERVER
WORKDIR /app
COPY . .
ENV VUE_APP_API_SERVER=${VUE_APP_API_SERVER}
ENV VUE_APP_SOCKET_SERVER=${VUE_APP_SOCKET_SERVER}
RUN npm install && npm run lint && npm run build

FROM nginx:1.23-alpine
WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/default.conf /etc/nginx/conf.d/



