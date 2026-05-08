import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectSection from "./components/ProjectSection";
import "./styles/app.css";

function App() {
  // ✅ Manual project listings (no localStorage)
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "PAYHUB",
      description: "A payment management system project",
    },
    {
      id: 2,
      title: "SITE DASH",
      description:
        "A fast and reliable platform for delivery and construction tools",
    },
    {
      id: 3,
      title: "Blueey",
      description: "A payment and monitoring system for water usage",
    },
  ]);

  // ✅ Search state
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Add new project function
  const addProject = (newProject) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        ...newProject,
        id: Date.now(), // ensures unique ID
      },
    ]);
  };

  // ✅ Filter projects based on search
  const filteredProjects = projects.filter((project) =>
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