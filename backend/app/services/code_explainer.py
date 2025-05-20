from openai import OpenAI
from app.config import Config
from typing import Final


config = Config() #type: ignore
client = OpenAI(
    base_url="https://api.studio.nebius.ai/v1/",
    api_key=config.NEBUIS_API_KEY
)

# Modes for explaining code
MODES: Final[dict[str, str]] = {
    "eli5": "Explain this code like I'm five.",
    "emoji": "Explain this code using emojis.",
    "grandma": "Explain this code as if you're a kind old grandma.",
    "default": "Explain this code simply and clearly."
}

async def explain_code(code: str, mode: str = "default") -> str:
    """ Generate a code explanation using Nebius AI's language model """
    
    prompt_style = MODES.get(mode.lower(), MODES["default"])
    prompt = f"{prompt_style}\n\nCode:\n{code}\n"
    
    try:
        completion = client.chat.completions.create(
            model='meta-llama/Meta-Llama-3.1-70B-Instruct',
            messages=[
                {'role': 'system',
                  'content': "You are a friendly and knowledgeable coding tutor. Your task is to explain code in a clear, engaging, and educational manner. You should adjust the level of detail based on the user's chosen explanation mode, such as 'eli5', 'emoji', or 'grandma'."},
                {'role': 'user', 'content': prompt}
            ],
            max_tokens=500,
            temperature=1,
            top_p=1,
            n=1,
            stream=False,
            presence_penalty=0,
            frequency_penalty=0
        )
        completion_to_json = completion.model_dump()
        explanation = completion_to_json['choices'][0]['message']['content'].strip()
        return explanation
    except Exception as e:
        raise Exception(f"Failed to generate explanation: {str(e)}")
