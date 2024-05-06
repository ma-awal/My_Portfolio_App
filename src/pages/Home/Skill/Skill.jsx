import React from 'react';
import './Skill.css';

import { skillsData } from '../../../data/data';
import PageTitle from '../../../components/PageTitle/PageTitle';

const Skill = () => {
  return (
    <section className=" section_skills custom_height   " id="skills">
      <div className="container   ">
        <PageTitle
          title={'My Skills'}
          text={
            ' Before hiring.. It is your right to know how I organized my skills with stacks. I kept my stacks one by one in this section to represent my skills. '
          }
        />

        <div className="row align-items-center  justify-content-center g-4 ">
          {skillsData.map((skill, index) => {
            return (
              <div className="col-6 col-lg-4">
                <div
                  className="single_skill text-center rounded shadow-lg m-0 m-md-2 "
                  key={index}
                >
                  <img
                    src={skill.image}
                    className="img-fluid mx-auto shadow     mb-3   "
                    alt=""
                  />

                  <span className="text-center d-block   text-uppercase fw-semibold px-2 custom_text ">
                    {skill.skillTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
