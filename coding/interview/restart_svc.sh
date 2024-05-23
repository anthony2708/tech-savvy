#!/bin/bash

# Define list of services to restart
services=( "httpd" "mysqld" )

for service in "${services[@]}"; do
  # Check if service is running
  if systemctl status "$service" | grep -q "running"; then
    echo "$service is already running."
  else
    echo "Restarting service: $service"
    systemctl restart "$service"
  fi
done
