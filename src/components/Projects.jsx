import { projects } from "../Data";
import ProjectModal from "./modals/ProjectModal";
import { useState } from "react";


export default function Projects({searchFilter, categoryFilter}) {
    const [selectedProject, setSelectedProject] = useState(null);
    
    const ProjectCard = (proj, index) => {
        return (
            <div className="project-card" key={index}>
                <img src={proj.image} alt={proj.name} />
                <div className="card-pop-up" onClick={() => setSelectedProject(proj)}>
                    <div>{proj.category}</div>
                    <h3>{proj.name}</h3>
                </div>
            </div>
        )
    }

  return (
    <>
    <div className="project-grid" id="projects">
        {projects.filter((proj) => proj.name.startsWith(searchFilter))
        .filter((proj) => proj.category.startsWith(categoryFilter))
        .map((proj, index) => (
            ProjectCard(proj, index)
        ))}
    </div>
    <ProjectModal projectState={[selectedProject, setSelectedProject]} />
    </>
  )
}
