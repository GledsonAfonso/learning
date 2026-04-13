# Infraestrutura como código: Separando ambientes na AWS com Ansible e Terraform

Part 2 of the an introductory course about Terraform and Ansible.

## Generating the SSH keys to use this

You will need to create two pairs of SSH keys to use this project, one for the development environment, and another for the production enviroment. To do this, run:

```shell
ssh-keygen
```

Follow the steps and choose an unique name containing the environment that the key is related to. Also, choose the correct environment folder for each key (`./env/dev` for the dev environment, `./env/prod` for the production environment). That will generate a pair of keys, one public and one private.

After completing this process, update the `main.tf` file to use the public key that you created.