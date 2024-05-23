#!/bin/bash

# Define log directory and file pattern
log_dir="/var/log"
log_pattern="*.log"

# Rotate logs on each server in the server_list file
while IFS= read -r server; do
  ssh $server << EOF
    # Function to rotate a single log file
    rotate_log() {
      local log_file="$1"
      if [ -f "$log_file" ]; then
        mv "$log_file" "$log_file.1"
        gzip "$log_file.1"
      fi
    }

    # Rotate each log file in the directory
    for log_file in $(find "$log_dir" -name "$log_pattern"); do
      rotate_log "$log_file"
    done
  EOF
done < server_list.txt

echo "Log rotation complete on all servers!"