# terraform {
#   required_version = ">= 1.0"
#   required_providers {
#     aws = {
#       source  = "hashicorp/aws"
#       version = "~> 4.0"
#     }
#     random = {
#       source  = "hashicorp/random"
#       version = "~> 3.0"
#     }
#   }
# }

# provider "aws" {
#   region = var.region
# }

# # S3 Bucket for Frontend
# resource "aws_s3_bucket" "frontend" {
#   bucket = "mern-frontend-${random_id.bucket_suffix.hex}"
# }

# resource "aws_s3_bucket_website_configuration" "frontend" {
#   bucket = aws_s3_bucket.frontend.id

#   index_document {
#     suffix = "index.html"
#   }

#   error_document {
#     key = "index.html"
#   }
# }

# resource "aws_s3_bucket_acl" "frontend" {
#   bucket = aws_s3_bucket.frontend.id
#   acl    = "public-read"
# }

# resource "aws_s3_bucket_policy" "frontend" {
#   bucket = aws_s3_bucket.frontend.id
#   policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [
#       {
#         Effect    = "Allow"
#         Principal = "*"
#         Action    = "s3:GetObject"
#         Resource  = "${aws_s3_bucket.frontend.arn}/*"
#       }
#     ]
#   })
# }

# # CloudFront Distribution for S3
# resource "aws_cloudfront_distribution" "frontend" {
#   origin {
#     domain_name = aws_s3_bucket.frontend.bucket_regional_domain_name
#     origin_id   = "S3-${aws_s3_bucket.frontend.bucket}"

#     custom_origin_config {
#       http_port              = 80
#       https_port             = 443
#       origin_protocol_policy = "http-only"
#       origin_ssl_protocols   = ["TLSv1.2"]
#     }
#   }

#   enabled             = true
#   is_ipv6_enabled     = true
#   default_root_object = "index.html"

#   default_cache_behavior {
#     allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
#     cached_methods   = ["GET", "HEAD"]
#     target_origin_id = "S3-${aws_s3_bucket.frontend.bucket}"

#     forwarded_values {
#       query_string = false
#       cookies {
#         forward = "none"
#       }
#     }

#     viewer_protocol_policy = "redirect-to-https"
#     min_ttl                = 0
#     default_ttl            = 3600
#     max_ttl                = 86400
#   }

#   price_class = "PriceClass_100"

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }

#   viewer_certificate {
#     cloudfront_default_certificate = false
#     ssl_support_method         = "sni-only"
#   }
# }

# # IAM Role for Lambda
# resource "aws_iam_role" "lambda_exec" {
#   name = "serverless_lambda"

#   assume_role_policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [{
#       Action = "sts:AssumeRole"
#       Effect = "Allow"
#       Principal = {
#         Service = "lambda.amazonaws.com"
#       }
#     }]
#   })
# }

# # IAM Policy for Lambda
# resource "aws_iam_role_policy_attachment" "lambda_basic" {
#   role       = aws_iam_role.lambda_exec.name
#   policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
# }

# # Lambda Function
# # Lambda Function with Environment Variables
# resource "aws_lambda_function" "api" {
#   filename      = "${path.module}/../backend.zip"
#   function_name = "${var.app_name}-api-${var.environment}"
#   role          = aws_iam_role.lambda_exec.arn
#   handler       = "handler.handler"
#   runtime       = "nodejs14.x"
#   memory_size   = 512
#   timeout       = 30

#   environment {
#     variables = {
#       MONGODB_URI      = var.mongodb_uri
#       JWT_SECRET       = var.jwt_secret
#       NODE_ENV         = "production"
#     }
#   }

#   source_code_hash = filebase64sha256("${path.module}/../backend.zip")
# }

# # SSM Parameters for Secrets (Alternative approach)
# resource "aws_ssm_parameter" "mongodb_uri" {
#   name        = "/${var.app_name}/${var.environment}/mongodb-uri"
#   description = "MongoDB Connection String"
#   type        = "SecureString"
#   value       = var.mongodb_uri
# }

# resource "aws_ssm_parameter" "jwt_secret" {
#   name        = "/${var.app_name}/${var.environment}/jwt-secret"
#   description = "JWT Secret Key"
#   type        = "SecureString"
#   value       = var.jwt_secret
# }

# # API Gateway
# resource "aws_apigatewayv2_api" "lambda" {
#   name          = "serverless_lambda_gw"
#   protocol_type = "HTTP"
# }

# resource "aws_apigatewayv2_stage" "lambda" {
#   api_id      = aws_apigatewayv2_api.lambda.id
#   name        = "$default"
#   auto_deploy = true
# }

# resource "aws_apigatewayv2_integration" "lambda" {
#   api_id           = aws_apigatewayv2_api.lambda.id
#   integration_type = "AWS_PROXY"

#   integration_method = "POST"
#   integration_uri    = aws_lambda_function.api.invoke_arn
# }

# resource "aws_apigatewayv2_route" "lambda" {
#   api_id    = aws_apigatewayv2_api.lambda.id
#   route_key = "ANY /{proxy+}"
#   target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
# }

# # Lambda Permission
# resource "aws_lambda_permission" "api_gw" {
#   statement_id  = "AllowExecutionFromAPIGateway"
#   action        = "lambda:InvokeFunction"
#   function_name = aws_lambda_function.api.function_name
#   principal     = "apigateway.amazonaws.com"
#   source_arn    = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
# }

# # Random suffix for bucket name
# resource "random_id" "bucket_suffix" {
#   byte_length = 4
# }




































terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.30"  # Updated to version that supports Node.js 22.x
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
    null = {
      source  = "hashicorp/null"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}

# S3 Bucket for Frontend
resource "aws_s3_bucket" "frontend" {
  bucket = "mern-frontend-${random_id.bucket_suffix.hex}"
}

# Disable S3 Block Public Access
resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "frontend" {
  bucket = aws_s3_bucket.frontend.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "frontend" {
  depends_on = [
    aws_s3_bucket_public_access_block.frontend,
    aws_s3_bucket_ownership_controls.frontend
  ]

  bucket = aws_s3_bucket.frontend.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "frontend" {
  depends_on = [aws_s3_bucket_public_access_block.frontend]

  bucket = aws_s3_bucket.frontend.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.frontend.arn}/*"
      }
    ]
  })
}

# Upload frontend files to S3
resource "null_resource" "upload_frontend" {
  depends_on = [
    aws_s3_bucket.frontend,
    aws_s3_bucket_policy.frontend,
    aws_s3_bucket_acl.frontend
  ]

  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = <<EOT
      cd ../frontend
      npm install
      npm run build
      aws s3 sync dist/ s3://${aws_s3_bucket.frontend.bucket} --delete
    EOT
  }
}

# CloudFront Distribution for S3
resource "aws_cloudfront_distribution" "frontend" {
  depends_on = [null_resource.upload_frontend]
  
  origin {
    domain_name = aws_s3_bucket.frontend.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.frontend.bucket}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.frontend.bucket}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

}

# IAM Role for Lambda
resource "aws_iam_role" "lambda_exec" {
  name = "serverless_lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# IAM Policy for Lambda
resource "aws_iam_role_policy_attachment" "lambda_basic" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Add SSM read permission to Lambda role
resource "aws_iam_role_policy_attachment" "lambda_ssm" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMReadOnlyAccess"
}

# Lambda Function with Node.js 22.x
resource "aws_lambda_function" "api" {
  filename      = "${path.module}/../backend.zip"
  function_name = "${var.app_name}-api-${var.environment}"
  role          = aws_iam_role.lambda_exec.arn
  handler       = "handler.handler"
  runtime       = "nodejs22.x"  # Updated to Node.js 22.x
  memory_size   = 512
  timeout       = 30

  environment {
    variables = {
      MONGODB_URI      = "{{ssm:${aws_ssm_parameter.mongodb_uri.name}}}"
      JWT_SECRET       = "{{ssm:${aws_ssm_parameter.jwt_secret.name}}}"
      NODE_ENV         = "production"
    }
  }

  source_code_hash = filebase64sha256("${path.module}/../backend.zip")
}

# SSM Parameters for Secrets
resource "aws_ssm_parameter" "mongodb_uri" {
  name        = "/${var.app_name}/${var.environment}/mongodb-uri"
  description = "MongoDB Connection String"
  type        = "SecureString"
  value       = var.mongodb_uri
}

resource "aws_ssm_parameter" "jwt_secret" {
  name        = "/${var.app_name}/${var.environment}/jwt-secret"
  description = "JWT Secret Key"
  type        = "SecureString"
  value       = var.jwt_secret
}

# API Gateway
resource "aws_apigatewayv2_api" "lambda" {
  name          = "serverless_lambda_gw"
  protocol_type = "HTTP"
  
  cors_configuration {
    allow_origins = ["https://${aws_cloudfront_distribution.frontend.domain_name}"]
    allow_methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    allow_headers = ["content-type", "authorization"]
    max_age       = 300
  }
}

resource "aws_apigatewayv2_stage" "lambda" {
  api_id      = aws_apigatewayv2_api.lambda.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "lambda" {
  api_id           = aws_apigatewayv2_api.lambda.id
  integration_type = "AWS_PROXY"

  integration_method = "POST"
  integration_uri    = aws_lambda_function.api.invoke_arn
}

resource "aws_apigatewayv2_route" "lambda" {
  api_id    = aws_apigatewayv2_api.lambda.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

# Lambda Permission
resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.lambda.execution_arn}/*/*"
}

# Random suffix for bucket name
resource "random_id" "bucket_suffix" {
  byte_length = 4
}
































