import "./App.css";

import { Routes, Route } from "react-router-dom";

import ProjectPage from "./page/ProjectPage";
import Home from "./page/Home";
import Sidebar from "./components/Sidebar";
import CardDetail from "./page/CardDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
      </Routes>
    </>
  );
}

export default App;
