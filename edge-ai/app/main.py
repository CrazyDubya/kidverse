from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging

from app.config import settings
from app.services.inference import InferenceService

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Kidverse Edge AI Service",
    description="Real-time content analysis and inference",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

inference_service = InferenceService()

class TextAnalysisRequest(BaseModel):
    text: str
    language: str = "en"

class AnalysisResponse(BaseModel):
    safe: bool
    score: float
    categories: dict
    details: str

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "edge-ai"}

@app.post("/analyze/image", response_model=AnalysisResponse)
async def analyze_image(file: UploadFile = File(...)):
    """
    Analyze uploaded image for safety and content classification.
    """
    try:
        result = await inference_service.analyze_image(file)
        return result
    except Exception as e:
        logger.error(f"Image analysis failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/analyze/text", response_model=AnalysisResponse)
async def analyze_text(request: TextAnalysisRequest):
    """
    Analyze text content for safety and appropriateness.
    """
    try:
        result = await inference_service.analyze_text(request.text, request.language)
        return result
    except Exception as e:
        logger.error(f"Text analysis failed: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/models")
async def list_models():
    """
    List available AI models.
    """
    return inference_service.get_available_models()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)