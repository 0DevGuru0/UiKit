FROM node:16.13.0-alpine as build

RUN apk update && \
    apk add --no-cache python3 make g++ curl git
RUN corepack enable

WORKDIR /avidkit
ENV NODE_ENV=development

# install and build everything
COPY . /avidkit

RUN --mount=id=avidkit.storybook.yarn.cache,target=/avidkit/.yarn/cache,type=cache \
    yarn install --immutable

ENV NODE_ENV=production

RUN --mount=id=avidkit.icons.main.cache,type=cache,target=/avidkit/node_modules/.cache \
    --mount=id=avidkit.icons.turbo.cache,type=cache,target=/avidkit/icons/.turbo \
    yarn build:icons

RUN --mount=id=avidkit.storybook.build.webpack.cache,type=cache,target=/avidkit/node_modules/.cache \
    --mount=id=avidkit.storybook.build.ts.cache,type=cache,target=/avidkit/tsconfig.tsbuildinfo \
    yarn build-storybook

FROM nginx:1.20.2-alpine

COPY --chown=nginx:nginx --from=build /avidkit/.storybook/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx --from=build /avidkit/storybook-build /app/current
