# Infraestrutura como código: Preparando máquinas na AWS com Ansible e Terraform

Introductory course about Terraform and Ansible.

## Terraform

We use that to apply IaC (infrastructure as a code) for the project. Which means that we can create cloud stuff without manually creating them in the platform that we choose. Also, that means that our infrastructure can benefit from versioning and documentation.

For this project, we've used:

* `terraform init` to download all necessary dependencies for Terraform to work with this project
* `terraform plan` to verify what changes will be applied to the infrastructure before actually making the changes (is safer to run this before)
* `terraform apply` to apply the changes made to the infrastructure
* `terraform destroy` to destroy all infrastructure

## Ansible

We can use it to automate server setup. And that's it. It's pretty simple in its purpose, but very powerful since we can do post-deploy setup all in an automated manner, in the code.

To start the automation, we used:

```shell
ansible-playbook playbook.yml -u ubuntu --private-key <private-key-name>.pem -i hosts.yml
```

Where:

* `playbook.yml` is the playbook file being utilized
* `-u ubuntu` is the user in the server
* `--private-key <private-key-name>.pem` is the private key path with the file extension
* `-i hosts.yml` points to the hosts file where we put the instance public IP

## Observations

* `hosts.yml` is the bridge between out infrastructure and Ansible. We place the instance's public IP there, so Ansible can know which machine to apply the automation

*  On the last command in Ansible's playbook, we are using `nohup` together with `&`. That's because even thought we are running the command in the background (using `&`), we still need to prevent the program from closing when the SSH session is terminated. We do that using `nohup`, which prevents the termination of the program when a hang up signal is received.