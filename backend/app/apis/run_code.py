from fastapi import APIRouter

from backend.app.schemas.code import CodeRequest

run_code = APIRouter()

@run_code.route("/")
async def run(code_request: CodeRequest):
    pass