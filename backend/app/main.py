from fastapi import FastAPI
from apis.explain_code import explain_code
from apis.run_code import run_code

app = FastAPI(title="CodeCUddle")


app.include_router(explain_code, prefix="/api/explain", tags=["Run COde"])
app.include_router(run_code, prefix="/api/run", tags=["Explain Code"])

