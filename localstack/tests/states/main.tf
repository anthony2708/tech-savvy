provider "aws" {
  access_key = "test"
  secret_key = "test"
  region     = "us-west-2"

  s3_use_path_style           = false
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    s3       = "http://s3.localhost.localstack.cloud:4566"
    dynamodb = "http://localhost:4566"
  }
}

resource "aws_s3_bucket" "terraform_state" {
  bucket = var.bucket_name

  lifecycle {
    prevent_destroy = false
  }

  force_destroy = true
}

resource "aws_s3_bucket_versioning" "terraform_statever" {
  bucket = var.bucket_name

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_dynamodb_table" "lock" {
  name           = var.statedb_name
  hash_key       = "LockID"
  read_capacity  = 20
  write_capacity = 20

  attribute {
    name = "LockID"
    type = "S"
  }
}