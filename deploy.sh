#!/bin/bash

APP_NAME=nodejs-demo-app
IMAGE_NAME=yourdockerhubusername/$APP_NAME:latest
CONTAINER_NAME=$APP_NAME

# Stop old container if running
if [ $(sudo docker ps -q -f name=$CONTAINER_NAME) ]; then
  echo "Stopping old container..."
  sudo docker stop $CONTAINER_NAME
  sudo docker rm $CONTAINER_NAME
fi

# Pull latest image from Docker Hub
echo "Pulling latest image..."
sudo docker pull $IMAGE_NAME

# Run new container
echo "Starting new container..."
sudo docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME

