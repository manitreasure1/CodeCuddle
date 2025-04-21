from fastapi import APIRouter

run_code = APIRouter()

@run_code.route("/")
async def run():
    pass