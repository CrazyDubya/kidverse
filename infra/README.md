# Infrastructure

> Infrastructure as Code and deployment configurations

## Overview

Contains all infrastructure-related code and configurations:

- Docker configurations
- Kubernetes manifests
- Terraform modules
- CI/CD configurations
- Monitoring and logging setup

## Structure

```
infra/
├── docker/          # Docker-related files
├── kubernetes/      # K8s manifests
├── terraform/       # Terraform modules
├── monitoring/      # Prometheus, Grafana configs
└── scripts/         # Deployment scripts
```

## Deployment

### Local Development
```bash
docker-compose up
```

### Production (Kubernetes)
```bash
kubectl apply -f kubernetes/
```