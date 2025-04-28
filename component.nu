# Define a custom type for a Scryr component
# type ScryrComponent {
#   name: string,
#   icon: string,
#   description: string,
#   version: string,
#   languages: list<string>,
#   frameworks: list<string>,
#   source_code_url: string,
#   connections: list<string> # Assuming connections are represented as a list of strings for now
# }

type Url = string

# Validation function for Url type
def is_valid_url [url: string] {
  # A more robust URL validation would be ideal here.
  # This is a basic example.
  $url | str starts-with "http"
}

let docs: Url = "https://docs.scryr.dev"

# Example usage:
let webComponent = {
  name: "MyComponent"
  icon: "🚀"
  description: "A sample Scryr component"
  version: "1.0.0"
  languages: ["Python", "JavaScript"]
  source_code_url: "https://example.com/mycomponent"
  connections: []
}

print $webComponent