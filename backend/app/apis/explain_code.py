from fastapi import APIRouter, status

explain_code = APIRouter()


@explain_code.route("/")
async def explain():
    pass

