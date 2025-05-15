
#Language: "Python" | "TypeScript" | "Go" | "Rust" | "Java" | "C#" | "C++" | "JavaScript" | 
    "PHP" | "Ruby" | "Swift" | "Kotlin" | "Dart" | "Objective-C" | "Scala" | "Clojure" | 
    "Erlang" | "Haskell" | "Lua" | "Perl" | "Assembly" | "Bash" | "Fortran" | "Groovy" |
    "X++" | "YAML"

// Define the allowed options for frameworks
#Framework: "Django" | "Express" | "React" | "NextJS" | "Ruby on Rails" | "Laravel" | "Spring" | 
    "Flask" | "ASP.NET" | "Meteor" | "Sails.js" | "Phoenix" | "FastAPI" | "Strapi" | 
    "Play Framework" | "CakePHP" | "Symfony" | "Koa" | "Nuxt.js" | "Hapi" | "Bottle" | 
    "Pyramid" | "Gatsby" | "Blitz.js" | "Angular" | "Vue.js" | "Backbone.js"

// Define the allowed deployment options
#Deployment: "Docker" | "Kubernetes" | "ECS" | "Lambda"

// A single Scryr Component
#ScryrComponent: {
    name:        string
    icon:        string
    description: string
    version:     string

    language:    #Language
    frameworks: [...#Framework]

    deployment:  #Deployment

    source_code_url: string
    
    connections: [...string]
    links: [...string]
    docs:  [...string]
}

// A list of components
components: [...#ScryrComponent]

components: [
  {
    name: "Auth Service"
    icon: "🔒"
    description: "Handles user authentication"
    version: "1.2.0"
    language: "Python"
    frameworks: ["Django", "React"]
    deployment: "ECS"
    source_code_url: "https://github.com/example/auth-service"
    connections: ["User DB", "Email API"]
    links: ["https://auth.example.com"]
    docs: ["https://docs.example.com/auth"]
  },
  {
    name: "Frontend App"
    icon: "🌐"
    description: "The user-facing web frontend"
    version: "2.0.1"
    language: "Python"
    frameworks: ["Express"]
    deployment: "Lambda"
    source_code_url: "https://github.com/example/frontend"
    connections: ["Auth Service"]
    links: ["https://www.example.com"]
    docs: ["https://docs.example.com/frontend"]
  }
]