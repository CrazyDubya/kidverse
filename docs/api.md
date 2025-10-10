# Kidverse API Documentation

## Base URL

```
Development: http://localhost:8000/api
Production: https://api.kidverse.io
```

## Authentication

Most endpoints require authentication using JWT tokens:

```http
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register User
```http
POST /auth/register
```

**Request Body:**
```json
{
  "email": "parent@example.com",
  "password": "SecurePassword123!",
  "role": "parent",
  "familyName": "Smith Family"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "email": "parent@example.com",
    "role": "parent"
  }
}
```

#### Login
```http
POST /auth/login
```

**Request Body:**
```json
{
  "email": "parent@example.com",
  "password": "SecurePassword123!"
}
```

### Content Filtering

#### Check URL
```http
POST /filter/url
```

**Request Body:**
```json
{
  "url": "https://example.com",
  "userId": 123
}
```

**Response:**
```json
{
  "safe": true,
  "category": "educational",
  "ageRating": "all_ages",
  "reason": "Content is appropriate for all ages"
}
```

#### Analyze Content
```http
POST /filter/content
```

**Request Body:**
```json
{
  "content": "Text or image data",
  "type": "text",
  "userId": 123
}
```

### Edge AI

#### Analyze Image
```http
POST /ai/analyze/image
```

**Request:** Multipart form data with image file

**Response:**
```json
{
  "safe": true,
  "score": 0.95,
  "categories": {
    "appropriate": 0.95,
    "violence": 0.02,
    "adult_content": 0.01
  },
  "details": "Image contains educational content"
}
```

### Parental Controls

#### Get Activity Dashboard
```http
GET /dashboard/activity?userId=123&period=7d
```

**Response:**
```json
{
  "totalScreenTime": 25200,
  "blockedContent": 12,
  "topCategories": ["educational", "games", "videos"],
  "alerts": []
}
```

#### Set Screen Time Limit
```http
POST /controls/screentime
```

**Request Body:**
```json
{
  "userId": 123,
  "dailyLimit": 7200,
  "schedule": {
    "weekday": { "start": "15:00", "end": "21:00" },
    "weekend": { "start": "09:00", "end": "21:00" }
  }
}
```

## Error Responses

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": {}
}
```

### Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error