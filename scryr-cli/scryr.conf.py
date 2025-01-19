from pydantic import BaseModel
from schema_types import (
    Emoji,
    ProgrammingLanguage,
    HttpUrl,
    SoftwareFramework,
    SoftwareLicense,
    SemanticVersion,
)


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


def main():
    print("Hello from scryr-cli!")
    test = Component(
        name="Test",
        icon="🌞",
        description="A test component",
        version="1.0.0",
        docs_url="https://example.com/docs",
        source_code_url="https://newsatck.com",
        languages=[ProgrammingLanguage.PYTHON, ProgrammingLanguage.JAVASCRIPT],
        frameworks=[SoftwareFramework.DJANGO, SoftwareFramework.FLASK],
    )
    print(test)


if __name__ == "__main__":
    main()
