# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
EXPOSE  4200
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/uAngular /usr/share/nginx/html
