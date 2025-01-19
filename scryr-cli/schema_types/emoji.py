import re


class Emoji(str):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, valid_info):
        if not isinstance(v, str):
            raise TypeError("string required")
        emoji_pattern = re.compile(
            r"[\U0001F600-\U0001F64F]|"  # emoticons
            r"[\U0001F300-\U0001F5FF]|"  # symbols & pictographs
            r"[\U0001F680-\U0001F6FF]|"  # transport & map symbols
            r"[\U0001F1E0-\U0001F1FF]",  # flags (iOS)
            flags=re.UNICODE,
        )
        if not emoji_pattern.match(v):
            raise ValueError("Invalid emoji")
        return v
