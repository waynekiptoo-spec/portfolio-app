import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="grid">
      {projects.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
export default ProjectList;