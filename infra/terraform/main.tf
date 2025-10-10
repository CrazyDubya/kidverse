# Kidverse Infrastructure - Main Terraform Configuration

terraform {
  required_version = ">= 1.0"
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC Module
module "vpc" {
  source = "./modules/vpc"
  
  environment = var.environment
  vpc_cidr    = var.vpc_cidr
}

# EKS Cluster Module
module "eks" {
  source = "./modules/eks"
  
  environment    = var.environment
  vpc_id         = module.vpc.vpc_id
  subnet_ids     = module.vpc.private_subnet_ids
  cluster_name   = "kidverse-${var.environment}"
}

# RDS Database Module
module "rds" {
  source = "./modules/rds"
  
  environment       = var.environment
  vpc_id           = module.vpc.vpc_id
  subnet_ids       = module.vpc.database_subnet_ids
  instance_class   = var.db_instance_class
}