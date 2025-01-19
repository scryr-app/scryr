from schema_types import Component, ProgrammingLanguage, SoftwareFramework, Connection
from devtools import debug

hiDb = Component(
    name="HiDB",
    icon="🗄️",
    description="A high-performance, open-source time series database optimized for fast ingest and complex queries.",
    version="1.0.0",
    languages=[ProgrammingLanguage.SQL],
    frameworks=[SoftwareFramework.FLASK],
    source_code_url="http://test.com",
)


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
        connections=[
            Connection(
                component=hiDb,
                api_url="https://api.example.com",
                api_key="your_api_key",
                api_secret="your_secret",
            )
        ],
    )
    debug(test)


if __name__ == "__main__":
    main()
