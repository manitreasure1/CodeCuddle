from pydantic import BaseModel


class BaseRequest(BaseModel):
    code: str


class ExplainRequest(BaseRequest):
    mode: str


class CodeRequest(BaseRequest):
    language: str
    