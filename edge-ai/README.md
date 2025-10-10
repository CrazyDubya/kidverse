# Edge AI Service

> Real-time content analysis and inference engine for Kidverse

## Overview

The Edge AI service provides on-device machine learning models for real-time content analysis, including:

- Image and video classification
- Natural language processing
- Content safety scoring
- Behavioral pattern detection

## Features

- **TensorFlow Lite & ONNX Runtime** for optimized inference
- **Multi-model support** for different content types
- **GPU acceleration** where available
- **Model versioning** and A/B testing
- **Redis caching** for faster repeated analysis

## API Endpoints

- `POST /analyze/image` - Analyze image content
- `POST /analyze/text` - Analyze text content
- `POST /analyze/video` - Analyze video content
- `GET /models` - List available models
- `GET /health` - Health check

## Local Development

```bash
cd edge-ai
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8001
```