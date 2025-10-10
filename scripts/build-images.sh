#!/bin/bash

# Build Docker images for all services

set -e

ENVIRONMENT=${1:-dev}
VERSION=${2:-latest}

echo "Building Docker images for environment: $ENVIRONMENT"
echo "Version: $VERSION"

SERVICES=("edge-ai" "content-filter" "auth" "parental-controls" "web")

for service in "${SERVICES[@]}"; do
    echo "Building $service..."
    docker build -t kidverse-$service:$VERSION ./$service
    docker tag kidverse-$service:$VERSION kidverse-$service:$ENVIRONMENT
    echo "✓ $service built successfully"
done

echo "All images built successfully!"