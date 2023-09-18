FROM node:lts-alpine
RUN apk --no-cache add bash tzdata
ENV PORT=3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# Install dependencies
RUN yarn --network-timeout 100000 --frozen-lockfile

COPY . /usr/src/app

# Start
EXPOSE 3000

CMD ["yarn", "start:dev"]