# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
# FROM node:16.13.2-alpine3.14 as builder

FROM node:latest as build

WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/nice-day-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80
