module "aws-dev" {
  source = "../../infra"
  aws_instance = "t2.micro"
  aws_region = "us-east-1"
  aws_ami = "ami-0c7217cdde317cfec"
  ssh_key = "alura-iac-dev"
  environment = "dev"
}

output "ip" {
  value = module.aws-dev.public_ip
}