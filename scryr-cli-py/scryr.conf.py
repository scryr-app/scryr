from schema_types import Component, ProgrammingLanguage, SoftwareFramework, Connection
from devtools import debug
import svg
from enum import Enum

hiDb = Component(
    name="HiDB",
    icon="🗄️",
    description="A high-performance, open-source time series database optimized for fast ingest and complex queries.",
    version="1.0.0",
    languages=[ProgrammingLanguage.SQL, ProgrammingLanguage.PYTHON],
    frameworks=[SoftwareFramework.FLASK],
    source_code_url="http://test.com",
)


def output_dot_env(component: Component):
    dot_env_file = ""
    fields = component.model_fields
    for key, definition in fields.items():
        value = component.__getattribute__(key)
        if isinstance(value, list):
            if isinstance(value[0], Enum):
                k = []
                for val in value:
                    k.append(val.value)
                ret = ",".join(k)
                dot_env_file += str(f'{key}="{ret}"\n')
            if isinstance(value[0], Connection):
                for val in value:
                    dot_env_file += str(
                        f'{val.component.name}.api_url="{val.api_url}"\n'
                    )
                    dot_env_file += str(
                        f'{val.component.name}.api_key="{val.api_key}"\n'
                    )
                    dot_env_file += str(
                        f'{val.component.name}.api_secret="{val.api_secret}"\n'
                    )
        elif isinstance(value, dict):
            ret = ",".join(value.keys())
            dot_env_file += str(f'{key}="{ret}"\n')
        elif isinstance(value, Enum):
            ret = ",".join([f"{v}" for v in value])
            dot_env_file += str(f'{key}="{ret}"\n')
        else:
            dot_env_file += str(f'{key}="{value}"\n')
    return dot_env_file


def output_svg(component: Component) -> svg.SVG:
    canvas = svg.SVG(
        width=1000,
        height=600,
        elements=[
            svg.Ellipse(
                ry=42,
                rx=104,
                cy=205,
                cx=502,
                stroke="red",
                fill="white",
                stroke_width=5,
            ),
            svg.Text(
                x=450,
                y=220,
                font_family="Noto Sans JP",
                font_size=24,
                fill="black",
                text=component.connections[0].component.name,
            ),
            svg.Line(
                x1=109,
                y1=109,
                x2=502,
                y2=205,
                stroke="black",
                stroke_width=2,
            ),
            svg.Rect(
                height=84,
                width=208,
                y=109,
                x=109,
                stroke="black",
                fill="blue",
            ),
            svg.Text(
                x=150,
                y=150,
                font_family="Noto Sans JP",
                font_size=24,
                fill="black",
                text=component.name,
            ),
        ],
    )
    return canvas


def main():
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

    test_dot_env = output_dot_env(test)
    hi_db_dot_env = output_dot_env(hiDb)
    with open("test.env", "w") as file:
        file.write(test_dot_env)
    with open("hi-db.env", "w") as file:
        file.write(hi_db_dot_env)
    to_svg = output_svg(test)
    with open("test.svg", "w") as file:
        file.write(to_svg.as_str())


if __name__ == "__main__":
    main()
