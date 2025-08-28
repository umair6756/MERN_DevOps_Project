output "frontend_url" {
  value = aws_cloudfront_distribution.frontend.domain_name
}

output "api_url" {
  value = aws_apigatewayv2_api.lambda.api_endpoint
}

output "s3_bucket_name" {
  value = aws_s3_bucket.frontend.bucket
}


# Outputs
# output "s3_bucket_name" {
#   value = aws_s3_bucket.frontend.bucket
# }

# output "api_url" {
#   value = aws_apigatewayv2_api.lambda.api_endpoint
# }

# output "cloudfront_domain" {
#   value = aws_cloudfront_distribution.frontend.domain_name
# }