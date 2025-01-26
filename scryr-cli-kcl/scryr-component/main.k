import k8s.api.core.v1 as k8core
import regex

type SoftwareFramework = "Hi" | "There"

schema SoftwareFrame:
    type: "Django" | "Flask" | "Spring" | "ASP.NET" | "Laravel" | "Ruby on Rails" | "Express" | "Koa" | "Phoenix" | "React Native" | "Flutter" | "Xamarin" | "Ionic" | "SwiftUI" | "Kotlin Multiplatform" | "Angular" | "React" | "Vue" | "Svelte" | "Next.js" | "Nuxt.js" | "Gatsby" | "Node.js" | "FastAPI" | "Gin" | "Fiber" | "Hapi" | "Sinatra" | "Rocket" | "Actix" | "TensorFlow" | "PyTorch" | "Scikit-learn" | "Keras" | "Theano" | "MXNet" | "Caffe" | "CNTK" | "Spark ML" | "Apache Spark" | "Apache Flink" | "Apache Beam" | "Kafka Streams" | "Airflow" | "Luigi" | "Prefect" | "Dagster" | "NiFi" = "Django"

schema SemVer:
    version: str
    _patch: int = 0
    _minor: int = 0
    _major: int = 0

    check:
        _minor > 0
        _major > 0
        _patch > 0

schema app:
    name: str
    softwareFramework: SoftwareFramework
    version: SemVer
    description: str

mytestApp: app = {
    description: "This is a test app"
    name: "test-app"
    softwareFramework: "Hi"
    version: {version = "1.0.0", _patch = 1}
}

k8core.Pod {
    metadata.name = 'web-app'
    spec.containers = [{
        name = "web-app-container"
        image = "nginx:latest"
        ports = [{
            containerPort = 80
        }]
    }]
}
