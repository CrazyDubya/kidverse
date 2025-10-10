# Auth Service

> User management and authentication for Kidverse

## Overview

Provides secure authentication and authorization for all Kidverse users:

- JWT-based authentication
- Role-based access control (Parent, Child, Admin)
- Family account management
- OAuth integration (Google, Apple)
- Session management

## Features

- **Multi-user accounts**: Family profiles with parent and child accounts
- **Secure tokens**: JWT with refresh token rotation
- **Password policies**: Age-appropriate password requirements
- **2FA support**: Optional two-factor authentication for parents
- **Session management**: Track active sessions across devices