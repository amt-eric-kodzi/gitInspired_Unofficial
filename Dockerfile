FROM node:lts-bullseye-slim@sha256:fa342ba2bc67bc94e5ba27ee2fb030a945936acac30c2dc1b70c52738d50994c as base

WORKDIR /usr/app

# Install dependencies based on the preferred package manager
COPY package.json ./

RUN npm pkg delete scripts.postinstall

RUN yarn install

COPY . ./

RUN yarn build

FROM  nginx:stable-alpine3.17-slim@sha256:9b36fe8d36d1ad2a402b97bb203709bf5e6e43c8973105fd3947e963d89d666c as production
COPY ./nginx/nginx.conf ./etc/nginx/conf.d/default.conf
COPY --from=base ./usr/app/dist ./usr/share/nginx/html

EXPOSE 4173

CMD ["nginx", "-g", "daemon off;"]
