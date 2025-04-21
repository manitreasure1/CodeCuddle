from fastapi import FastAPI
from app.apis.explain_code import explain_router
from app.apis.run_code import run_code_router


app = FastAPI(title="CodeCuddle")


app.include_router(explain_router, prefix="/api/explain", tags=["Run COde"])
app.include_router(run_code_router, prefix="/api/run", tags=["Explain Code"])

