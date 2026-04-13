terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = "default"
  region  = var.aws_region
}

resource "aws_instance" "app_server" {
  ami           = var.aws_ami
  instance_type = var.aws_instance
  key_name = var.ssh_key

  tags = {
    Name = "Terraform Ansible Python - ${var.environment}"
  }
}

resource "aws_key_pair" "ssh_key" {
  key_name = var.ssh_key
  public_key = file("${var.ssh_key}.pub")
}

output "public_ip" {
  value = aws_instance.app_server.public_ip
}
