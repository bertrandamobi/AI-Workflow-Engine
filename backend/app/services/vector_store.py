from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

from app.core.config import get_settings


class VectorStoreService:
    def __init__(self) -> None:
        settings = get_settings()
        self._embeddings = OpenAIEmbeddings(api_key=settings.openai_api_key)
        self._store = Chroma(
            persist_directory=settings.chroma_persist_directory,
            embedding_function=self._embeddings,
        )

    def similarity_search(self, query: str, k: int = 4):
        return self._store.similarity_search(query, k=k)
