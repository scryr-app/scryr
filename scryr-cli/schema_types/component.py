from pydantic import BaseModel, HttpUrl
from .emoji import Emoji
from .languages import ProgrammingLanguage
from .frameworks import SoftwareFramework
from .license import SoftwareLicense
from .semantic_version import SemanticVersion
from .connections import Connection


class Component(BaseModel):
    name: str
    icon: Emoji
    description: str
    version: SemanticVersion
    docs_url: HttpUrl | None = None
    source_code_url: HttpUrl
    monitoring_urls: list[HttpUrl] | None = None
    languages: list[ProgrammingLanguage]
    frameworks: list[SoftwareFramework]
    license: SoftwareLicense | None = None
    connections: list[Connection] | None = None
