# Configure the AWS provider
provider "aws" {
  access_key = "test"
  secret_key = "test"
  region     = "us-west-2"

  s3_use_path_style           = false
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    ec2 = "http://localhost:4566"
  }
}

# Create a RDS instance
resource "aws_db_instance" "default" {
  allocated_storage   = 10
  engine              = "mysql"
  instance_class      = "db.t2.micro"
  name                = "${var.instance_name}-db"
  username            = "admin"
  password            = var.db_password
  skip_final_snapshot = true
}