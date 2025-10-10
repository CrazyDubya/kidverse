# Kidverse Quick Start Guide

## Get Up and Running in 5 Minutes

This guide will help you get the Kidverse development environment running on your local machine.

## Prerequisites

Make sure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop))
- **Git** ([Download](https://git-scm.com/))
- **Python** 3.9+ (for Edge AI service)

## Step 1: Clone the Repository

```bash
git clone https://github.com/CrazyDubya/kidverse.git
cd kidverse
```

## Step 2: Install Dependencies

```bash
npm install
```

This will install all dependencies for the monorepo workspaces.

## Step 3: Start the Development Environment

```bash
docker-compose up
```

This command will:
- Start PostgreSQL database
- Start Redis cache
- Start MongoDB for analytics
- Launch all microservices
- Start the web application
- Start the parent dashboard

**Note**: The first run may take a few minutes as Docker downloads and builds all images.

## Step 4: Access the Applications

Once everything is running, you can access:

| Service | URL | Description |
|---------|-----|-------------|
| **Web App** | http://localhost:3000 | Main kid-facing interface |
| **Parent Dashboard** | http://localhost:3001 | Parental controls dashboard |
| **API Gateway** | http://localhost:8000 | Main API endpoint |
| **Edge AI Service** | http://localhost:8001 | AI inference service |
| **Content Filter** | http://localhost:8002 | Content filtering service |
| **Auth Service** | http://localhost:8003 | Authentication service |
| **Parental Controls** | http://localhost:8004 | Monitoring backend |

## Step 5: Verify Everything Works

Test the health endpoints:

```bash
# Check API Gateway
curl http://localhost:8000/health

# Check Edge AI
curl http://localhost:8001/health

# Check Auth Service
curl http://localhost:8003/health
```

You should see `{"status":"healthy"}` responses.

## Development Workflow

### Working on a Specific Service

Each service can be developed independently:

```bash
# Work on Edge AI
cd edge-ai
python -m uvicorn app.main:app --reload --port 8001

# Work on Content Filter
cd content-filter
npm run dev

# Work on Web App
cd web
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests for a specific service
npm test --workspace=edge-ai
npm test --workspace=content-filter

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

### Linting and Formatting

```bash
# Check code style
npm run lint
npm run format:check

# Fix code style issues
npm run lint:fix
npm run format
```

## Common Commands

### Stop Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (clean slate)
docker-compose down -v
```

### View Logs

```bash
# View all logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f edge-ai
docker-compose logs -f web
```

### Rebuild Services

```bash
# Rebuild all services
docker-compose build

# Rebuild specific service
docker-compose build edge-ai
```

## Project Structure Overview

```
kidverse/
├── edge-ai/              # Python-based AI inference
├── content-filter/       # TypeScript content filtering
├── auth/                 # TypeScript authentication
├── parental-controls/    # TypeScript monitoring
├── web/                  # Next.js web app
├── mobile/               # React Native app
├── infra/                # Infrastructure code
├── .github/              # CI/CD workflows
├── docs/                 # Documentation
└── scripts/              # Utility scripts
```

## Next Steps

1. **Read the Architecture Guide**: [docs/architecture.md](docs/architecture.md)
2. **Check API Documentation**: [docs/api.md](docs/api.md)
3. **Review Contributing Guidelines**: [CONTRIBUTING.md](CONTRIBUTING.md)
4. **Explore the Code**: Start with the README in each service directory

## Troubleshooting

### Port Already in Use

If you see port conflicts, check what's using the ports:

```bash
# On macOS/Linux
lsof -i :3000
lsof -i :8000

# On Windows
netstat -ano | findstr :3000
netstat -ano | findstr :8000
```

### Docker Issues

```bash
# Clean Docker cache
docker system prune -a

# Restart Docker Desktop
# Then rebuild
docker-compose build --no-cache
```

### Database Connection Issues

Wait for databases to fully initialize:

```bash
# Check if PostgreSQL is ready
docker-compose exec postgres pg_isready -U kidverse

# Check if Redis is ready
docker-compose exec redis redis-cli ping
```

### Module Not Found Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# For Python services
cd edge-ai
pip install -r requirements.txt
```

## Getting Help

- **GitHub Issues**: [Create an issue](https://github.com/CrazyDubya/kidverse/issues)
- **Documentation**: Check the [docs/](docs/) directory
- **Code Examples**: Look at test files in each service

## Ready to Contribute?

Check out our [Contributing Guidelines](CONTRIBUTING.md) to learn how to:

- Create a feature branch
- Submit a pull request
- Follow coding standards
- Write tests

---

**Happy coding! Let's make the internet safer for kids! 🌟**