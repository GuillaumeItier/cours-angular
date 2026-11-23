# syntax=docker/dockerfile:1.7

# Install dependencies from the lockfile first so source edits keep this layer cached.
FROM node:24.15-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build the Angular app in production mode.
FROM node:24.15-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json ./
COPY . .
RUN node ./node_modules/@angular/cli/bin/ng.js build --configuration production

# Serve only the compiled static files; nginx-unprivileged listens on port 8080.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/cours-angular/browser/ /usr/share/nginx/html/
EXPOSE 8080
USER 101
CMD ["nginx", "-g", "daemon off;"]
