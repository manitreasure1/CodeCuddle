import httpx


async def execute_code(code: str, language: str):
    url = "https://emkc.org/api/v2/piston/execute"
    payload = {
        "language": f"{language}",  
        "version": "*",       
        "files": [{"content":f"{code}"}],
        "stdin": "",
        "args": [],   
        "compile_timeout": 10000, 
        "run_timeout": 3000,       
        "compile_memory_limit": -1,  
        "run_memory_limit": -1
    }
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
            result = response.json()   
            return result  
    except httpx.HTTPError as e:
        return {
             "error":"Request failed",
             "details": str(e)
        }

