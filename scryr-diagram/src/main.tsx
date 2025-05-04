import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ThreeElements } from "@react-three/fiber";

// Handle type error with React 19 and threeJS react-three-fiber
declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
      }
    }
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
