# Deployment Guide

## Prerequisites

- Docker and Docker Compose
- Kubernetes cluster (for production)
- Terraform (for infrastructure provisioning)
- kubectl configured

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/CrazyDubya/kidverse.git
   cd kidverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start services**
   ```bash
   docker-compose up
   ```

4. **Access services**
   - Web App: http://localhost:3000
   - API Gateway: http://localhost:8000
   - Parent Dashboard: http://localhost:3001

## Staging Deployment

### Using Docker Compose

```bash
# Set environment
export ENV=staging

# Start services
docker-compose -f docker-compose.yml -f docker-compose.staging.yml up -d
```

### Using Kubernetes

```bash
# Apply configurations
kubectl apply -f infra/kubernetes/namespace.yaml
kubectl apply -f infra/kubernetes/staging/

# Check deployment status
kubectl get pods -n kidverse
```

## Production Deployment

### Infrastructure Provisioning

1. **Initialize Terraform**
   ```bash
   cd infra/terraform
   terraform init
   ```

2. **Plan infrastructure**
   ```bash
   terraform plan -var="environment=production"
   ```

3. **Apply infrastructure**
   ```bash
   terraform apply -var="environment=production"
   ```

### Deploy Services

1. **Build Docker images**
   ```bash
   ./scripts/build-images.sh production
   ```

2. **Push to registry**
   ```bash
   ./scripts/push-images.sh production
   ```

3. **Deploy to Kubernetes**
   ```bash
   kubectl apply -f infra/kubernetes/production/
   ```

4. **Verify deployment**
   ```bash
   kubectl get pods -n kidverse
   kubectl get services -n kidverse
   ```

## Environment Variables

Create `.env` files for each environment:

```bash
# Database
DATABASE_URL=postgresql://user:password@host:5432/kidverse
MONGODB_URL=mongodb://user:password@host:27017/kidverse_analytics
REDIS_URL=redis://host:6379

# Auth
JWT_SECRET=your-secret-key
JWT_EXPIRATION=24h

# Services
EDGE_AI_URL=http://edge-ai:8000
CONTENT_FILTER_URL=http://content-filter:8000
AUTH_SERVICE_URL=http://auth:8000

# External Services
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
```

## Monitoring

### Access Grafana
```bash
kubectl port-forward -n monitoring svc/grafana 3000:80
```

### Access Prometheus
```bash
kubectl port-forward -n monitoring svc/prometheus 9090:9090
```

## Rollback

```bash
# Kubernetes rollback
kubectl rollout undo deployment/edge-ai -n kidverse

# View rollout history
kubectl rollout history deployment/edge-ai -n kidverse
```

## Troubleshooting

### Check logs
```bash
kubectl logs -f deployment/edge-ai -n kidverse
```

### Debug pod
```bash
kubectl exec -it pod-name -n kidverse -- /bin/sh
```

### Check service endpoints
```bash
kubectl get endpoints -n kidverse
```