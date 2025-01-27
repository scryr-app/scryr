import regex
import net

schema SoftwareFramework:
    name: "Django" | "Flask" | "Spring" | "ASP.NET" | "Laravel" | "Ruby on Rails" | "Express" | "Koa" | "Phoenix" | "React Native" | "Flutter" | "Xamarin" | "Ionic" | "SwiftUI" | "Kotlin Multiplatform" | "Angular" | "React" | "Vue" | "Svelte" | "Next.js" | "Nuxt.js" | "Gatsby" | "Node.js" | "FastAPI" | "Gin" | "Fiber" | "Hapi" | "Sinatra" | "Rocket" | "Actix" | "TensorFlow" | "PyTorch" | "Scikit-learn" | "Keras" | "Theano" | "MXNet" | "Caffe" | "CNTK" | "Spark ML" | "Apache Spark" | "Apache Flink" | "Apache Beam" | "Kafka Streams" | "Airflow" | "Luigi" | "Prefect" | "Dagster" | "NiFi"
    frameworkVersion: SemVer = {version = "1.0.0"}

schema SemVer:
    version: str

    check:
        # change this to have major, minor, patch and easy incrementation
        # Check if version follows semver
        regex.match(version, r'^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$'), "Does not meet SemVer format from https://semver.org/"

type Emoji = str
type Markdown = str
type URL = str

schema Component:
    name: str
    icon: Emoji
    description: Markdown
    version: SemVer
    docs_url?: URL
    softwareFramework: SoftwareFramework

    check:
        regex.match(icon, r'[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F900}-\u{1F9FF}]'), "Invalid Emoji"
        net.fqdn("docs_url"), "docs_url is not a fully qualified domain name"

mytestApp: Component = {
    name: "test-app"
    icon: "🚀"
    description: "This is a test app"
    docs_url: "ekkkm"
    softwareFramework: {name = "Django", frameworkVersion = {version = "3.0.0"}}
    version: {version = "1.0.0"}
}
