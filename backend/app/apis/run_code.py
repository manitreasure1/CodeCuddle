from fastapi import APIRouter, status, HTTPException
from app.services.code_runner import execute_code

from app.schemas.code import CodeRequest

run_code_router = APIRouter()

@run_code_router.post("/")
async def run(code_request: CodeRequest):
    try:
        result = execute_code(code_request.code, code_request.language)
        return {"explaination": result}
    except Exception as e:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))