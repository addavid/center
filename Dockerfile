FROM node:12.16.3 AS base
RUN mkdir -p /tmp/center
COPY . /tmp/center/
WORKDIR /tmp/center/
RUN rm -rf ./node_modules
RUN ls -ltr
RUN npm i && npm run build

FROM nginx:latest
RUN rm -f /usr/share/nginx/html/index.html
COPY --from=base /tmp/center/dist/* /usr/share/nginx/html/
EXPOSE 8080:80
