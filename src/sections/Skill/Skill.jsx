import React from 'react';
import './Skill.css';
import { skillsData } from '../../data/data';
import PageTitle from '../../components/PageTitle/PageTitle';

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
        <div className="row d-flex align-items-center justify-content-center gy-5 gy-lg-0">
          <div className="  col-lg-6">
            <div className="skills_img  ">
              <img src="/images/pic-3.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="skills_wrapper col-lg-6">
            {skillsData.map((skill, index) => {
              return (
                <div>
                  <div
                    className="single_skill text-center  shadow-lg mb-2   "
                    key={index}
                  >
                    <img
                      src={skill.image}
                      className="img-fluid  shadow        "
                      alt=""
                    />
                  </div>
                  <span className="text-center d-block   text-uppercase    ">
                    {skill.skillTitle}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
