import "./App.css";

import { Routes, Route } from "react-router-dom";

import ProjectPage from "./page/ProjectPage";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
