export default function ProjectModal({ projectState }) {
    const [project, setProject] = projectState;

    const CreateProjectModal = (proj) => {
        return project ? (
          <div className="project-modal" id={proj.name} data-open={proj.name}>
            <div className="modal-container">
              <header className="modal-header">
                <h3>{proj.name}</h3>
                <i className="fas fa-times" data-close={true} onClick={() => setProject(null)}></i>
              </header>
              <div className="modal-body">
                <div className="project-card">
                  <img src={proj.image} alt={proj.name} />
                </div>
                <div className="modal-text">
                  <h2>{proj.name}</h2>
                  <p>{proj.description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (<></>);
    };

  return (
    <div id="project-modals">
        {CreateProjectModal(project)}
    </div>
  )
}
