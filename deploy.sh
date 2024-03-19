#!/bin/bash

# Build the React app
npm run build

# Copy the build files to the server
scp -r build/* user@server:/var/www/my-app