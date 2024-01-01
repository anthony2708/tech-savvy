# Define Terraform backend using a S3 bucket for storing the Terraform state
terraform {
  backend "s3" {
    bucket = "anthony-terraform-bucket"
    key    = "prod/server/terraform.tfstate"
    region = "us-west-2"
  }
}