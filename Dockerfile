FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install && npm run dev

FROM nginx:1.23-alpine
WORKDIR /app
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/default.conf /etc/nginx/conf.d/



