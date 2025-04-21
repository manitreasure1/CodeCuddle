

from pydantic_settings import SettingsConfigDict, BaseSettings


class Config(BaseSettings):
    NEBUIS_API_KEY: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra='ignore'
    )


