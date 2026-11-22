FROM node:22-alpine
LABEL org.opencontainers.image.title="sample-api"
WORKDIR /app
COPY server.js ./
ADD plain.tar /vol/
EXPOSE 3000
VOLUME /vol
ENTRYPOINT ["node","/app/server.js"]
