# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
# FROM node:16.13.2-alpine3.14 as builder

FROM node:latest as build

WORKDIR /usr/src/app

# Add the source code to app
COPY ./ /usr/src/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist/nice-day-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80


# FROM node:12.16.1-alpine As builder

# WORKDIR /usr/src/app

# COPY package.json package-lock.json ./

# RUN npm install

# COPY . .

# #RUN npm run build --prod

# # pass off the static resources (everything in my dist folder)
# # to a web server
# FROM nginx:1.15.8-alpine

# # we pass our ditributable artifact to Nginx to host
# COPY --from=builder /usr/src/app/dist/rest-api-frontend/ /usr/share/nginx/html

# To run the container, after building the image,
# run docker run -p 8080:80 <name-of-image:version>
# (80 is the default nginx port)

###################################





 # Stage 1: Compile and Build angular codebase

# # Use official node image as the base image
# FROM node:16.13.2-alpine3.14 as build

# RUN node --version

# # FROM node:latest as build

# WORKDIR /usr/local/app

# # Add the source code to app
# COPY ./ /usr/local/app/

# # Install all the dependencies
# RUN npm install

# # Generate the build of the application
# RUN npm run build


# # Stage 2: Serve app with nginx server

# # Use official nginx image as the base image
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents.
# COPY --from=build /usr/local/app/dist/nice-day-frontend /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80
