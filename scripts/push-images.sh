#!/bin/bash

# Push Docker images to registry

set -e

REGISTRY=${DOCKER_REGISTRY:-ghcr.io/crazydubya}
ENVIRONMENT=${1:-dev}
VERSION=${2:-latest}

echo "Pushing images to $REGISTRY"
echo "Environment: $ENVIRONMENT"
echo "Version: $VERSION"

SERVICES=("edge-ai" "content-filter" "auth" "parental-controls" "web")

for service in "${SERVICES[@]}"; do
    echo "Pushing $service..."
    docker tag kidverse-$service:$VERSION $REGISTRY/kidverse-$service:$VERSION
    docker tag kidverse-$service:$VERSION $REGISTRY/kidverse-$service:$ENVIRONMENT
    docker push $REGISTRY/kidverse-$service:$VERSION
    docker push $REGISTRY/kidverse-$service:$ENVIRONMENT
    echo "✓ $service pushed successfully"
done

echo "All images pushed successfully!"