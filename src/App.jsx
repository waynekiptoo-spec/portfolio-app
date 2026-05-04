import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectSection from "./components/ProjectSection";
import "./styles/app.css";

function App() {
  
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  
  function addProject(newProject) {
    setProjects(prev => [...prev, newProject]);
  }

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <ProjectForm onAddProject={addProject} />
      <ProjectSection projects={filteredProjects} />
    </div>
  );
}

export default App;