import os

def generate_log_report(log_dir, output_file):
  """Generates a report summarizing application logs."""
  error_count = 0
  warning_count = 0
  info_count = 0

  with open(output_file, "w") as report_file:
    report_file.write("Log Report for: {}\n".format(log_dir))
    for filename in os.listdir(log_dir):
      if filename.endswith(".log"):
        log_file = os.path.join(log_dir, filename)
        with open(log_file, "r") as log:
          for line in log:
            if "ERROR" in line:
              error_count += 1
            elif "WARNING" in line:
              warning_count += 1
            else:
              info_count += 1
    report_file.write("Error Count: {}\n".format(error_count))
    report_file.write("Warning Count: {}\n".format(warning_count))
    report_file.write("Info Count: {}\n".format(info_count))

# Replace with the actual directory containing your logs
log_dir = "/var/log/myapp"
output_file = "log_report.txt"

generate_log_report(log_dir, output_file)

print("Log report generated successfully!")