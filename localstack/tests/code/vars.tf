variable "ami" {
  type        = string
  description = "The AMI to use for the EC2 instance"
  default     = "ami-785db401"
}

variable "instance_type" {
  type        = string
  description = "The type of EC2 instance to launch"
}

variable "instance_name" {
  type        = string
  description = "The name of EC2 instance to launch"
}

variable "server_port" {
  type        = number
  description = "The port the server will use for HTTP requests"
  default     = 8080
}

variable "server_text" {
  type        = string
  description = "The text to return from the server"
}

variable "min_size" {
  type        = number
  description = "The minimum number of EC2 instances in the ASG"
}

variable "max_size" {
  type        = number
  description = "The maximum number of EC2 instances in the ASG"
}

variable "db_remote_state_bucket" {
  type        = string
  description = "The name of the S3 bucket for the DB remote state"
}

variable "db_remote_state_key" {
  type        = string
  description = "The name of the S3 key for the DB remote state"
}

# Input variable: user names
variable "user_names" {
  description = "Create IAM users with these names"
  type        = list(string)
  default     = ["neo", "trinity", "morpheus"]
}

variable "enable_autoscaling" {
  description = "Enable autoscaling"
  type        = bool
}

variable "file" {
  description = "The file to use for the user data"
  type        = string
}

data "aws_availability_zones" "all" {}
data "terraform_remote_state" "db" {
  backend = "s3"

  config = {
    bucket = "${var.db_remote_state_bucket}"
    key    = "${var.db_remote_state_key}"
    region = "us-west-2"
  }
}

data "aws_iam_policy_document" "ec2_read_only" {
  statement {
    effect    = "Allow"
    actions   = ["ec2:Describe*"]
    resources = ["*"]
  }
}