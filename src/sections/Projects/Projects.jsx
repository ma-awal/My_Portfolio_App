import React from 'react';
import './Projects.css';

import { Link } from 'react-router-dom';
import { projectsData } from '../../data/data';
import PageTitle from '../../components/PageTitle/PageTitle';
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

        <div className="project_wrapper">
          {projectsData.map((item, index) => (
            <div key={index}>
              <div className="single_project shadow-lg   ">
                <div className="d-flex justify-content-center align-items-center link_btns gap-2  ">
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
                <div className="img_wrapper py-1">
                  <img
                    className="img-fluid  "
                    src={item.image}
                    alt={item.projectTitle}
                  />
                </div>
                <p className="text-uppercase text-center   fw-semibold  custom_text  ">
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
