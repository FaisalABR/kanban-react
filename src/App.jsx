import "./App.css";

import { Routes, Route } from "react-router-dom";

import ProjectPage from "./page/ProjectPage";
import Home from "./page/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
