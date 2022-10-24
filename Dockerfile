FROM node:18-alpine
RUN apk --no-cache add bash tzdata
USER node

RUN  mkdir -p /home/node/code
WORKDIR /home/node/code

COPY --chown=node:node ./node_modules ./node_modules
# COPY --chown=node:node ./config ./config
COPY --chown=node:node ./dist ./dist

EXPOSE 8080
USER node
CMD ./node_modules/.bin/cross-env node dist/main.js