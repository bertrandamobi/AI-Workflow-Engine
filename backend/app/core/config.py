from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_env: str = "development"
    app_host: str = "0.0.0.0"
    app_port: int = 8000
    log_level: str = "INFO"

    openai_api_key: str = ""
    openai_model: str = "gpt-4.1"

    vector_store_provider: str = "chroma"
    chroma_persist_directory: str = "./data/chroma"

    database_url: str = "sqlite:///./workflow_engine.db"


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
