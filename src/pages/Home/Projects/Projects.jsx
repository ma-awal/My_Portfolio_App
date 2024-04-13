import React from 'react';
import './Projects.css';

import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/data';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { FaGithub } from 'react-icons/fa6';
import { GoLinkExternal } from 'react-icons/go';

const Projects = () => {
  return (
    <div className="projects  ">
      <div className="container">
        <PageTitle title={'Projects'} />
        <div className="row project_wrapper justify-content-center align-items-center g-4  pt-5 ">
          {projectsData.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="single_project pb-3">
                <div className="d-flex justify-content-center align-items-center gap-3 link_btns ">
                  <Link to={item.githubLink}>
                    <span>
                      <FaGithub />
                    </span>
                  </Link>
                  <Link to={item.liveLink}>
                    <span>
                      <GoLinkExternal />
                    </span>
                  </Link>
                </div>
                <div className="img_wrapper">
                  <img
                    className="img-fluid"
                    src={item.image}
                    alt={item.projectTitle}
                  />
                </div>
                <p className="text-uppercase ps-2 my-2">{item.projectTitle}</p>
                <div className="skills d-flex flex-wrap align-items-center text-capitalize rounded-3 gap-2  mx-2 ps-2 py-1">
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className=" me-1   ">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end mt-3">
          <button className="btn   rounded-0 view_btn  fw-semibold" disabled>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
