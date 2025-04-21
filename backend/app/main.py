from fastapi import FastAPI
from apis.explain_code import explain_router
from apis.run_code import run_code_router

app = FastAPI(title="CodeCUddle")


app.include_router(explain_router, prefix="/api/explain", tags=["Run COde"])
app.include_router(run_code_router, prefix="/api/run", tags=["Explain Code"])

