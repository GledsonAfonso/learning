# Terraform tutorial

Terraform fundamentals turorial.

## Variables

Variables in Terraform can be placed in a `.tf` file in the same directory as your `main.tf` to be used. They usualy are called `variables.tf` and their syntax is like the following:

```
variable "variable_name" {
  description = "Description of the variable"
  type = string
  default = "Default value for the variable"
}
```

The `type` can vary. For a list of possible types that Terraform uses, see [this](https://developer.hashicorp.com/terraform/language/expressions/types).

Variables can be used like this after being declared:

```
 module "some_module" {
  ##...

  some_config  = var.variable_name
 }
```

## Setting values for variables

You have two ways of setting values in variables. The first one is through the CLI using the `-var variable_name=variable_value` syntax. The second one is throught the `terraform.tfvars` file. You can create the file the the folling syntax:

```
variable_name = variable_value
```

Terraform should load that automatically.

## Outputs

Outputs are used to print useful information about the infra to the user. You can achieve that creating an `outputs.tf` file in your project with content like this:

```
output "output_content_name" {
  description = "Description of what will be printed"

  ## value to be printed
  value       = aws_instance.app_server.id
}
```