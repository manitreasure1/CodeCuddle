from fastapi import APIRouter, status, HTTPException
from app.schemas.code import ExplainRequest
from app.services.code_explainer import explain_code

explain_router = APIRouter()


@explain_router.route("/")
async def explain(explain_request: ExplainRequest):

    try:
        result = explain_code(explain_request.code, explain_request.mode)
        return {"explaination": result}
    except Exception as e:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

