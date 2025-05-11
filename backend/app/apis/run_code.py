from fastapi import APIRouter
from ..services.code_runner import execute_code
from fastapi.responses import JSONResponse
from ..schemas.code import CodeRequest


run_code_router = APIRouter()


@run_code_router.post("/")
async def run(code_request: CodeRequest):
    try:
        result = await execute_code(code_request.code, code_request.language)
        return JSONResponse(result)
    except Exception as e:
        raise e