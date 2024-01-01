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

module "webserver_dev" {
  source = "../../"

  instance_name          = "webserver-dev"
  db_remote_state_bucket = var.db_remote_state_bucket
  db_remote_state_key    = var.db_remote_state_key

  instance_type = "t2.micro"
  min_size      = 2
  max_size      = 2

  enable_autoscaling = false
  server_text        = "New server text"
}