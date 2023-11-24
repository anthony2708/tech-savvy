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