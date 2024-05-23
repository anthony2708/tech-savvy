import os
import paramiko


def rotate_log(ssh_client, log_file):
  """Rotates a single log file on the remote server."""
  sftp = ssh_client.open_sftp()
  if os.path.isfile(log_file):
    new_filename = f"{log_file}.1"
    sftp.rename(log_file, new_filename)
    sftp.put(f"/bin/gzip {new_filename}", f"/bin/gzip {new_filename}")
  sftp.close()


def main():
  """Main function to rotate logs on all servers."""
  server_list = open("server_list.txt").readlines()
  for server in server_list:
    server = server.strip()  # Remove trailing newline character
    ssh_client = paramiko.SSHClient()
    ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh_client.connect(server)
    rotate_log(ssh_client, "/var/log/*.log")  # Replace with specific log pattern
    ssh_client.close()
  print("Log rotation complete on all servers!")


if __name__ == "__main__":
  main()