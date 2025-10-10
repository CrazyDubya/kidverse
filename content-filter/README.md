# Content Filter Service

> Multi-layer content filtering for Kidverse

## Overview

The Content Filter service provides comprehensive content filtering capabilities:

- URL filtering and categorization
- Keyword and phrase detection
- Real-time content rating
- Integration with Edge AI for deep analysis
- Configurable filter rules per age group

## Features

- **Multi-layer filtering**: URL, keyword, AI-based, and custom rules
- **Age-appropriate ratings**: Automatic content rating for different age groups
- **Whitelist/Blacklist**: Configurable allow and block lists
- **Real-time updates**: Dynamic filter rule updates
- **Analytics**: Track blocked content and filter effectiveness

## API Endpoints

- `POST /filter/url` - Check if URL is safe
- `POST /filter/content` - Analyze content safety
- `GET /filter/rules` - Get current filter rules
- `PUT /filter/rules` - Update filter rules
- `GET /health` - Health check