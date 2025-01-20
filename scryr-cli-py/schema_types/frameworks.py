from enum import Enum


class SoftwareFramework(str, Enum):
    # SaaS Frameworks
    DJANGO = "Django"
    FLASK = "Flask"
    SPRING = "Spring"
    ASP_NET = "ASP.NET"
    LARAVEL = "Laravel"
    RUBY_ON_RAILS = "Ruby on Rails"
    EXPRESS = "Express"
    KOA = "Koa"
    PHOENIX = "Phoenix"

    # Mobile App Frameworks
    REACT_NATIVE = "React Native"
    FLUTTER = "Flutter"
    XAMARIN = "Xamarin"
    IONIC = "Ionic"
    SWIFTUI = "SwiftUI"
    KOTLIN_MULTIPLATFORM = "Kotlin Multiplatform"

    # Web Frameworks
    ANGULAR = "Angular"
    REACT = "React"
    VUE = "Vue"
    SVELTE = "Svelte"
    NEXT_JS = "Next.js"
    NUXT_JS = "Nuxt.js"
    GATSBY = "Gatsby"

    # Server Frameworks
    NODE_JS = "Node.js"
    FASTAPI = "FastAPI"
    GIN = "Gin"
    FIBER = "Fiber"
    HAPI = "Hapi"
    SINATRA = "Sinatra"
    ROCKET = "Rocket"
    ACTIX = "Actix"

    # Data Science Frameworks
    TENSORFLOW = "TensorFlow"
    PYTORCH = "PyTorch"
    SCIKIT_LEARN = "Scikit-learn"
    KERAS = "Keras"
    THEANO = "Theano"
    MXNET = "MXNet"
    CAFFE = "Caffe"
    CNTK = "CNTK"
    SPARK_ML = "Spark ML"

    # Data Pipeline Frameworks
    APACHE_SPARK = "Apache Spark"
    APACHE_FLINK = "Apache Flink"
    APACHE_BEAM = "Apache Beam"
    KAFKA_STREAMS = "Kafka Streams"
    AIRFLOW = "Airflow"
    LUIGI = "Luigi"
    PREFECT = "Prefect"
    DAGSTER = "Dagster"
    NIFI = "NiFi"
