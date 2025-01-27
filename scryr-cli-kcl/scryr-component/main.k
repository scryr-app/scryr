import regex
import net

schema SoftwareFramework:
    name: "Django" | "Flask" | "Spring" | "ASP.NET" | "Laravel" | "Ruby on Rails" | "Express" | "Koa" | "Phoenix" | "React Native" | "Flutter" | "Xamarin" | "Ionic" | "SwiftUI" | "Kotlin Multiplatform" | "Angular" | "React" | "Vue" | "Svelte" | "Next.js" | "Nuxt.js" | "Gatsby" | "Node.js" | "FastAPI" | "Gin" | "Fiber" | "Hapi" | "Sinatra" | "Rocket" | "Actix" | "TensorFlow" | "PyTorch" | "Scikit-learn" | "Keras" | "Theano" | "MXNet" | "Caffe" | "CNTK" | "Spark ML" | "Apache Spark" | "Apache Flink" | "Apache Beam" | "Kafka Streams" | "Airflow" | "Luigi" | "Prefect" | "Dagster" | "NiFi" | "MySQL" | "PostgreSQL"
    frameworkVersion: SemVer = {version = "1.0.0"}

schema SoftwareLicense:
    name: "MIT" | "Apache 2.0" | "GPL 3.0" | "LGPL 3.0" | "BSD 2-Clause" | "BSD 3-Clause" | "MPL 2.0" | "EPL 2.0" | "AGPL 3.0" | "Unlicensed" | "CC0 1.0" | "ISC"

schema ProgrammingLanguage:
    name: "Python" | "JavaScript" | "Java" | "C#" | "C++" | "Ruby" | "Go" | "Swift" | "Kotlin" | "PHP" | "TypeScript" | "Rust" | "Scala" | "Dart" | "Objective-C" | "Perl" | "Haskell" | "Lua" | "Clojure" | "Elixir" | "F#" | "Erlang" | "Groovy" | "Shell" | "PowerShell" | "R" | "MATLAB" | "VB.NET" | "Julia" | "COBOL" | "Fortran" | "Pascal" | "Ada" | "Lisp" | "Prolog" | "Scheme" | "SQL"
    softwareVersion: SemVer = {version = "1.0.0"}

schema SemVer:
    version: str

    check:
        # change this to have major, minor, patch and easy incrementation
        # Check if version follows semver
        regex.match(version, r'^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$'), "Does not meet SemVer format from https://semver.org/"

type Emoji = str
type Markdown = str
type URL = str
type Secret = str

schema Connection:
    Component: Component
    api_url: URL
    api_key: Secret
    api_secret: Secret

schema Component:
    name: str
    icon: Emoji
    description: Markdown
    version: SemVer
    docs_url?: URL
    # Currently not checked
    source_code_url?: URL
    # Currently not checked
    monitoring_urls?: [URL]
    languages: [ProgrammingLanguage]
    softwareFramework: SoftwareFramework
    license: SoftwareLicense = {name = "Unlicensed"}
    connections?: [Connection]

    check:
        regex.match(icon, r'[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F900}-\u{1F9FF}]'), "Invalid Emoji"
        regex.match(docs_url, '^(https?|ftp)://[^\s/$.?#].[^\s]*$'), "Invalid URL"

hiDb: Component = {
    name: "hiDb"
    icon: "🌞"
    description: "hiDb is a high-performance, scalable, and distributed database."
    docs_url: "https://hidb.com"
    monitoring_urls: ["https://hidb.com/monitoring"]
    languages = [{name = "SQL", softwareVersion = {version = "6.8.0"}}]
    softwareFramework: {name = "PostgreSQL", frameworkVersion = {version = "12.0.0"}}
    version = {version = "1.0.0"}
}

mytestApp: Component = {
    name: "test-app"
    icon: "🚀"
    description: "This is a test app"
    docs_url: "https://test.com"
    monitoring_urls: ["https://test.com", "https://test2.com"]
    languages = [{name = "Python", softwareVersion = {version = "3.8.0"}}]
    softwareFramework: {name = "Django", frameworkVersion = {version = "3.0.0"}}
    version = {version = "1.0.0"}
    connections = [{Component: hiDb, api_url: "https://api.hidb.com", api_key = "key", api_secret = "fsa80f8sd"}]
}
