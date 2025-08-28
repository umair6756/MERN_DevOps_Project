variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "mongodb_uri" {
  description = "MongoDB connection string"
  type        = string
  sensitive   = true
  default     = "mongodb+srv://umair:jJQNrn03JeYmqG0r@task-app.mntm9wx.mongodb.net/?retryWrites=true&w=majority&appName=Task-app"
}

variable "jwt_secret" {
  description = "JWT secret key"
  type        = string
  sensitive   = true
  default     = "H#7gL!qZ$39p@tD1vEw&kNmZ^PzLuQsXaT!gBcD^r"
}

variable "app_name" {
  description = "Application name for resource naming"
  type        = string
  default     = "mern-notes-app"
}

variable "environment" {
  description = "Deployment environment (dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}