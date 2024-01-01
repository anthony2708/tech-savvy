output "ec2_instance_arn" {
  value = aws_instance.example.arn
}

output "ec2_public_ip" {
  value = aws_instance.example.public_ip
}

output "ec2_instance_public_dns" {
  value = aws_instance.example.public_dns
}

# Output variable: DNS Name of ELB
output "elb_dns_name" {
  value = aws_elb.example.dns_name
}

# Output variable: Auto Scaling Group name
output "asg_name" {
  value = aws_autoscaling_group.example.name
}

# Output variable: ELB Security Group Id
output "elb_security_group_id" {
  value = aws_security_group.elb.id
}

# Output variable: ARN
output "neo_arn" {
  value = ["${aws_iam_user.example.*.arn}"]
}
