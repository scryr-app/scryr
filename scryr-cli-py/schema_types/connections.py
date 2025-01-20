from pydantic import BaseModel, HttpUrl


class Connection(BaseModel):
    component: "Component"  # Use forward reference
    api_url: HttpUrl
    api_key: str
    api_secret: str


# Import Component at the end to avoid circular dependency
from .component import Component  # noqa: E402
