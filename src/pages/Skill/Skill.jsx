import React from 'react';
import './Skill.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import { skillData } from '../../data/data';

const Skill = () => {
  return (
    <section className="skill    ">
      <div className="container">
        <PageTitle title={'My Stacks'} />

        <div className="row justify-content-center">
          <div className="col-12   col-lg-10">
            <div className=" row skill_wrapper g-4  ">
              {skillData.map((skill) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="single_skill text-center rounded  ">
                      <img
                        src={skill.image}
                        className="img-fluid mx-auto shadow-lg rounded   mb-2   "
                        alt=""
                      />

                      <span className="text-center d-block   text-uppercase fw-semibold px-2 ">
                        {skill.skillTitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
