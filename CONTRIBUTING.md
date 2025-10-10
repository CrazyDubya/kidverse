# Contributing to Kidverse

Thank you for your interest in contributing to Kidverse! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)

## Code of Conduct

This project is dedicated to providing a welcoming and inclusive experience for everyone. We expect all contributors to:

- Be respectful and considerate
- Focus on what is best for the community
- Show empathy towards other community members
- Accept constructive criticism gracefully

## Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kidverse.git
   cd kidverse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development environment**
   ```bash
   docker-compose up
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Branch Naming

- Features: `feature/description`
- Bug fixes: `fix/description`
- Documentation: `docs/description`
- Performance: `perf/description`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new content filtering rule
fix: resolve authentication token expiration
docs: update API documentation
test: add unit tests for edge AI service
```

## Pull Request Process

1. **Update your fork**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests and linting**
   ```bash
   npm run lint
   npm test
   npm run format:check
   ```

3. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Add screenshots for UI changes
   - Ensure all CI checks pass

5. **Code Review**
   - Address review comments
   - Keep the PR focused and small
   - Be responsive to feedback

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow ESLint configuration
- Use functional components in React
- Write meaningful variable names
- Add comments for complex logic

### Python

- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Keep functions focused and small

### General

- Keep files under 300 lines when possible
- DRY (Don't Repeat Yourself)
- Write self-documenting code
- Add unit tests for new features

## Testing

### Unit Tests

```bash
# Run all tests
npm test

# Run specific service tests
npm test --workspace=edge-ai

# Watch mode
npm test -- --watch
```

### Integration Tests

```bash
npm run test:integration
```

### E2E Tests

```bash
npm run test:e2e
```

## Documentation

- Update README.md if you change functionality
- Add JSDoc/docstrings for public APIs
- Update API documentation for endpoint changes
- Include examples for new features

## Questions?

Feel free to:

- Open an issue for questions
- Join our community discussions
- Reach out to maintainers

Thank you for contributing to Kidverse! 🚀