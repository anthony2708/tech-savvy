# Output variable: DNS Name of ELB
output "elb_dns_name" {
  value = module.webserver_dev.elb_dns_name
}