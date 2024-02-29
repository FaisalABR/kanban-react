import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { KanbanProvider } from "./context/KanbanContext.jsx";
import DarkModeProvider from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <KanbanProvider>
          <App />
        </KanbanProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
