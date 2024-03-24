import React from 'react';
import './Projects.css';
import PageTitle from '../../components/PageTitle/PageTitle';

import { Link } from 'react-router-dom';
import { projectsData } from '../../data/data';

const Projects = () => {
  return (
    <section className="porjects  ">
      <div className="container">
        <PageTitle title={'projects'} />
        <div className="row project_wrapper justify-content-center align-items-center   ">
          <div className="col-12 col-lg-10 ">
            <div className="row gy-3 gy-md-4">
              {projectsData.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="single_project">
                    <div className="img_wrapper">
                      <img
                        className="img-fluid"
                        src={item.image}
                        alt={item.projectTitle}
                      />
                    </div>
                    <h6 className="   text-uppercase">{item.projectTitle}</h6>
                    <div className="d-flex py-2 gap-2 link_btns">
                      <button className="btn w-100">
                        <Link to={item.liveLink}>Live</Link>
                      </button>
                      <button className="btn w-100">
                        <Link to={item.githubLink}>Github</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
