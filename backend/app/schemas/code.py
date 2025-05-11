from pydantic import BaseModel
from typing import Literal


class BaseRequest(BaseModel):
    code: str


class ExplainRequest(BaseRequest):
    mode: Literal["grandma", "default" "eli5", "emoji"]


class CodeRequest(BaseRequest):
    language: str
    