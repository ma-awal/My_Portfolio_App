import React from 'react';
import './Projects.css';

import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/data';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { FaGithub } from 'react-icons/fa6';
import { GoLinkExternal } from 'react-icons/go';

const Projects = () => {
  return (
    <section className="section_projects custom_height   " id="projects">
      <div className="container">
        <PageTitle
          title={'  Recent Projects'}
          text={
            'I have completed few design and add basic functionlity of few projects'
          }
        />

        <div className="row project_wrapper justify-content-center align-items-center g-3 g-md-4 g-lg-5   ">
          {projectsData.map((item, index) => (
            <div className="col-12 col-md-6  " key={index}>
              <div className="single_project shadow-lg   ">
                <div className="d-flex justify-content-center align-items-center   link_btns gap-2 py-2">
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
                <div className="img_wrapper mb-3">
                  <img
                    className="img-fluid  "
                    src={item.image}
                    alt={item.projectTitle}
                  />
                </div>
                <p className="text-uppercase text-center   fw-semibold  custom_text">
                  {item.projectTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
