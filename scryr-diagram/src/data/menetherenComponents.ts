import { ScryrComponentClass, Language, Framework, Deployment } from "../types/ScryrComponent";

// Define the ScryrComponent instances based on menetheren.json
export const menetherenComponents: ScryrComponentClass[] = [
  new ScryrComponentClass({
    name: "Auth Service",
    icon: "🔒",
    description: "Handles user authentication",
    version: "1.2.0",
    language: Language.Python,
    frameworks: [Framework.Django],
    deployment: Deployment.ECS,
    sourceCodeUrl: "https://github.com/example/auth-service",
    connections: ["User DB", "Email API"],
    links: ["https://auth.example.com"],
    docs: ["https://docs.example.com/auth"]
  }),
  new ScryrComponentClass({
    name: "Frontend App",
    icon: "🌐",
    description: "The user-facing web frontend",
    version: "2.0.1",
    language: Language.Perl,
    frameworks: [Framework.Meteor],
    deployment: Deployment.Lambda,
    sourceCodeUrl: "https://github.com/example/frontend",
    connections: ["Auth Service"],
    links: ["https://www.example.com"],
    docs: ["https://docs.example.com/frontend"]
  })
];