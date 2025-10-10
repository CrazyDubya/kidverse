from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    redis_url: str = "redis://localhost:6379"
    model_path: str = "./models"
    max_image_size: int = 10 * 1024 * 1024  # 10MB
    max_text_length: int = 10000
    cache_ttl: int = 3600  # 1 hour
    
    class Config:
        env_file = ".env"

settings = Settings()