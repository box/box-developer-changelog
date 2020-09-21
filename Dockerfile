# Using the latest Node 14
FROM node:14

# Set a working directory to use
WORKDIR /code

# Copy package management files to 
# the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Start the watcher
CMD yarn lint!