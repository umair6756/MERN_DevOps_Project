#!/bin/bash
set -e

echo "=== MERN Stack Serverless Deployment ==="

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if Terraform is installed
if ! command -v terraform &> /dev/null; then
    echo "Terraform is not installed. Please install it first."
    exit 1
fi

# Build frontend
echo "Building frontend..."
cd ../frontend
npm install
npm run build
cd ..

# Package backend
echo "Packaging backend..."
cd backend
npm install
# Create zip without node_modules
# Replace the compression line with this for Windows PowerShell:
powershell -Command "Compress-Archive -Path 'Dockerfile', 'config', 'controllers', 'handler.js', 'index.js', 'models', 'package.json', 'routes', 'middleware', 'utils' -DestinationPath '../backend.zip' -Force"
cd ..

# Initialize and apply Terraform
echo "Deploying infrastructure..."
cd terraform
terraform apply -auto-approve

# Get outputs
BUCKET_NAME=$(terraform output -raw s3_bucket_name)
API_URL=$(terraform output -raw api_url)

# Create environment file for frontend
echo "Creating environment file..."
cat > frontend/dist/env.js << EOF
window.env = {
  REACT_APP_API_URL: "$API_URL"
};
EOF

# Upload frontend files to S3
echo "Uploading frontend to S3..."
aws s3 sync frontend/dist/ s3://$BUCKET_NAME --delete

echo "=== Deployment Complete ==="
echo "Frontend URL: https://$(terraform output -raw frontend_url)"
echo "API URL: $API_URL"