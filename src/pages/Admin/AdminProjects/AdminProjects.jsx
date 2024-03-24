import React, { useState } from 'react';

import './AdminProjects.css';
import { projectsData } from '../../../data/data';

const AdminProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const openUpdateModal = (project) => {
    setSelectedProject(project);
    setIsUpdateMode(true);
    setShowModal(true);
  };

  return (
    <div className="admin_projects">
      <button
        className="btn  create_btn mb-3 rounded-0 "
        onClick={() => setShowModal(true)}
      >
        Create Project
      </button>

      <div className="row gy-3">
        {projectsData.map((project, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="single_project  border border-dark">
              <div className="img_wrapper">
                <img
                  className="img-fluid"
                  src={project.image}
                  alt={project.projectTitle}
                />
              </div>
              <h6 className="m-0 my-2 text-uppercase">
                {project.projectTitle}
              </h6>
              <div className=" py-2 gap-2 d-flex gap-2 rounded-0">
                <button
                  className="btn btn-sm btn-warning rounded-0"
                  onClick={() => openUpdateModal(project)}
                >
                  Update
                </button>
                <button className="btn btn-sm btn-danger rounded-0">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="project_modal ">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-6  ">
                <div className="modal_content">
                  <h2>{isUpdateMode ? 'Update Project' : 'Add Project'}</h2>
                  <form className="admin_form">
                    <div className="form-group mb-3">
                      <label htmlFor="projectTitle">Project Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="projectTitle"
                        placeholder="Project Title"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="githubLink">Github Link</label>
                      <input
                        type="text"
                        className="form-control"
                        name="githubLink"
                        placeholder="GitHub Link"
                      />
                    </div>
                    <div className="form-input mb-3">
                      <label htmlFor="liveLink">Live Link</label>
                      <input
                        type="text"
                        className="form-control"
                        name="liveLink"
                        placeholder="Live Link"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="image">Image Url</label>
                      <input
                        type="text"
                        name="image"
                        placeholder="image url"
                        className="form-control"
                      />
                    </div>
                    <div className="modal_btn d-flex gap-2">
                      <button className="btn btn-sm  rounded-0" type="submit">
                        {isUpdateMode ? 'Update Project' : 'Add Project'}
                      </button>
                      <button
                        className="btn btn-sm  rounded-0 "
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
