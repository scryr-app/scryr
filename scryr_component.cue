// scryr_component.cue

// Define the allowed options for languages
Language: "Python" | "TypeScript" | "Go" | "Rust" | "Java" | "C#" | "C++" | "JavaScript" | "PHP" | "Ruby" | "Swift" | "Kotlin" | "Dart" | "Objective-C" | "Scala" | "Clojure" | "Erlang" | "Haskell" | "Lua" | "Perl" | "Assembly" | "Bash" | "Fortran" | "Groovy" | "Julia" | "Lisp" | "MATLAB" | "Pascal" | "PowerShell" | "R" | "SQL" | "Visual Basic" | "Ada" | "COBOL" | "Delphi" | "Elixir" | "F#" | "Forth" | "Prolog" | "Scheme" | "Smalltalk" | "Tcl" | "VHDL" | "Verilog" | "Apex" | "Ceylon" | "CoffeeScript" | "Crystal" | "D" | "Elm" | "Gosu" | "Haxe" | "Idris" | "Io" | "J" | "Nim" | "OCaml" | "Objective-J" | "PL/I" | "Q" | "Racket" | "REBOL" | "SAS" | "Scratch" | "Self" | "Simula" | "SPARK" | "Standard ML" | "SuperCollider" | "SystemVerilog" | "Vala" | "XQuery" | "Zig" | "ALGOL" | "Simula" | "APL" | "BASIC" | "Visual Basic" | "Caml" | "Object Pascal" | "Raku" | "Shell" | "Smalltalk" | "ML" | "CIL" | "Common Lisp" | "Logo" | "LiveScript" | "Octave" | "OpenCL" | "Oz" | "Pharo" | "Pico" | "Picolisp" | "Pike" | "Pizza" | "PL/I" | "PL/0" | "PL/B" | "PL/C" | "PL/M" | "PL/P" | "PL/SQL" | "PostScript" | "Processing" | "PureScript" | "Q" | "Racket" | "REBOL" | "Red" | "Ring" | "RPG" | "Ruby" | "Rust" | "S" | "SAS" | "Scala" | "Scheme" | "Scratch" | "Sed" | "Self" | "Shell" | "Simula" | "Smalltalk" | "SNOBOL" | "SPARK" | "SPSS" | "SQL" | "Squirrel" | "Standard ML" | "SuperCollider" | "Swift" | "Tcl" | "TeX" | "TypeScript" | "Vala" | "VBScript" | "Verilog" | "VHDL" | "Visual Basic" | "Wolfram" | "X++" | "XQuery" | "YAML" | "Zig"

// Define the allowed options for frameworks
Framework: "Django" | "Express" | "React" | "NextJS" | "Ruby on Rails" | "Laravel" | "Spring" | "Flask" | "ASP.NET" | "Meteor" | "Sails.js" | "Phoenix" | "FastAPI" | "Strapi" | "Play Framework" | "CakePHP" | "Symfony" | "Koa" | "Nuxt.js" | "Hapi" | "Bottle" | "Pyramid" | "Gatsby" | "Blitz.js" | "Angular" | "Vue.js" | "Backbone.js" | "Ember.js" | "Knockout.js" | "Aurelia" | "Mithril" | "Alpine.js" | "Svelte" | "Lit" | "TurboGears" | "Web2py" | "ColdFusion" | "Zope" | "CherryPy" | "Tornado" | "Sanic" | "Falcon" | "Mason" | "Yesod" | "Snap" | "Happstack" | "IHP" | "Rocket" | "Actix" | "Vapor" | "Perfect" | "Kitura" | "Beego" | "Gin" | "Echo" | "Fiber" | "Revel" | "Iris" | "Nancy" | "ServiceStack" | "Grails" | "JHipster" | "Vaadin" | "Quarkus" | "Micronaut" | "Helidon" | "Dropwizard" | "Jooby" | "Ratpack" | "Blade" | "JFinal" | "Vert.x" | "Ktor" | "Tapestry" | "Wicket" | "Lift" | "Scalatra" | "Play" | "Finatra" | "Finch" | "Unfiltered" | "Bowler" | "Spark" | "Javalin" | "Ninja" | "RingoJS" | "Total.js" | "AdonisJS" | "FeathersJS" | "LoopBack" | "NestJS" | "Hapi.js" | "Sapper" | "Remix" | "RedwoodJS" | "Eleventy" | "Hexo" | "Hugo" | "Jekyll" | "Middleman" | "Pelican" | "MkDocs" | "Docusaurus" | "DocPad" | "Assemble" | "Metalsmith" | "Wintersmith" | "Brunch" | "Gridsome" | "Nuxt" | "Quasar" | "Expo" | "Onsen UI" | "Framework7" | "NativeScript" | "Ionic" | "Capacitor" | "Weex" | "Tabris.js" | "React Native" | "Flutter" | "Xamarin" | "Cordova" | "PhoneGap" | "Monaca" | "Sencha Touch" | "Kony" | "Appcelerator" | "Titanium" | "Corona SDK" | "Unity" | "Godot" | "Cocos2d" | "Cocos Creator" | "Phaser" | "Three.js" | "Babylon.js" | "PlayCanvas" | "A-Frame" | "Blend4Web" | "Ogre" | "Irrlicht" | "Panda3D" | "Torque3D" | "CryEngine" | "Unreal Engine" | "GameMaker" | "Construct" | "RPG Maker" | "Ren'Py" | "Twine" | "Ink" | "TyranoBuilder" | "Stencyl" | "GDevelop" | "Defold"

// Define the allowed deployment options
Deployment: "Docker" | "Kubernetes" | "ECS" | "Lambda"

// A single Scryr Component
#ScryrComponent: {
    name:        string
    icon:        string
    description: string
    version:     string

    language:    Language
    frameworks: [...Framework]

    deployment:  Deployment

    source_code_url: string & =~"^https?://.*"
    
    connections: [...string]
    links: [...string & =~"^https?://.*"]
    docs:  [...string & =~"^https?://.*"]
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
    frameworks: ["Django"]
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
    language: "Perl"
    frameworks: ["Meteor"]
    deployment: "Lambda"
    source_code_url: "https://github.com/example/frontend"
    connections: ["Auth Service"]
    links: ["https://www.example.com"]
    docs: ["https://docs.example.com/frontend"]
  }
]