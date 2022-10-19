import "./App.css";
import Navbar from "./components/Widgets/Navbar";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Project from "./components/Project/Project.js";
import ProjectView from "./components/Project/ProjectView.js";
import ErrorPage from "./components/Error/ErrorPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/projectView" element={<ProjectView />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
