function ProjectSection({ projects }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>

          <div className="button-group">
            <button className="btn-secondary btn-small">View</button>
            <button className="btn-primary btn-small">Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectSection;