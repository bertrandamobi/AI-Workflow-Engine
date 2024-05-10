from langchain_openai import ChatOpenAI

from app.core.config import get_settings


class LLMService:
    def __init__(self) -> None:
        settings = get_settings()
        self.client = ChatOpenAI(model=settings.openai_model, api_key=settings.openai_api_key)

    def summarize(self, prompt: str) -> str:
        response = self.client.invoke(prompt)
        return response.content
