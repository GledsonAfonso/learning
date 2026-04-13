output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.app_server.id
}

output "instance_public_ip" {
  description = "Public IP address of the EC2 instance"
  value       = aws_instance.app_server.public_ip
}

output "instance_availability_zone" {
  description = "AWS region where this instace will be available"
  value       = aws_instance.app_server.availability_zone
}