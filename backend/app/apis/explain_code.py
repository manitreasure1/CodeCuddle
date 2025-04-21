from fastapi import APIRouter, status
from backend.app.schemas.code import ExplainRequest


explain_code = APIRouter()


@explain_code.route("/")
async def explain(explain_request: ExplainRequest):
    pass

