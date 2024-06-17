import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./i18n.ts";
import { LanguageProvider } from "./providers/langContext/index.tsx";
import { NavProvider } from "./providers/navContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <NavProvider>
          <App />
        </NavProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
