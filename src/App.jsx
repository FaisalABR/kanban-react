import "./App.css";

import { Routes, Route } from "react-router-dom";

import ProjectPage from "./page/ProjectPage";
import Home from "./page/Home";
import CardDetail from "./page/CardDetail";
import { useDarkMode } from "./context/useDarkMode";
import ProjectPageMobile from "./page/ProjectPageMobile";

function App() {
  const { isDark } = useDarkMode();
  return (
    <div className={isDark ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectPageMobile />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
