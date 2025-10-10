import pytest
from app.services.inference import InferenceService


def test_inference_service_initialization():
    """Test that InferenceService initializes correctly"""
    service = InferenceService()
    assert service is not None


@pytest.mark.asyncio
async def test_analyze_text():
    """Test text analysis returns expected format"""
    service = InferenceService()
    result = await service.analyze_text("Hello world", "en")
    
    assert "safe" in result
    assert "score" in result
    assert "categories" in result
    assert isinstance(result["safe"], bool)
    assert isinstance(result["score"], float)
    assert 0 <= result["score"] <= 1