import ProjectList from "./ProjectList";
import EmptyState from "./EmptyState";

function ProjectSection({ projects }) {
  return projects.length === 0
    ? <EmptyState />
    : <ProjectList projects={projects} />;
}
export default ProjectSection;