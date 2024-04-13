import React from 'react';
import './Skill.css';

import { skillsData } from '../../../data/data';
import PageTitle from '../../../components/PageTitle/PageTitle';

const Skill = () => {
  return (
    <div className=" skill   " id="skills">
      <div className="container   ">
        <PageTitle title={'My Skills'} />
        <div className="row align-items-center  justify-content-between  ">
          <div className=" col-12 col-lg-6">
            <h3>What skills I Have?</h3>
            <p>
              My journey into web development was self-directed, fueled by
              platforms like W3Schools and SoloLearn. These resources provided a
              solid foundation, which I've since augmented through hands-on
              projects and continual learning. Rooted in a passion for
              innovation and user-centric design, my skills enable me to deliver
              bespoke solutions that align with client objectives and industry
              standards. Within the realm of web development, I've cultivated a
              versatile skill set that empowers me to craft immersive digital
              experiences. Proficient in HTML, CSS, and JavaScript, I construct
              the fundamental structure, style, and functionality of websites
              with precision and creativity. Leveraging Bootstrap, I ensure
              seamless responsiveness and aesthetic consistency across various
              devices, enhancing user engagement.
            </p>
          </div>
          <div className=" col-12 col-lg-6  skill_bg   ">
            <div className="skill_wrapper">
              {skillsData.map((skill) => {
                return (
                  <div className="single_skill text-center rounded py-3  ">
                    <img
                      src={skill.image}
                      className="img-fluid mx-auto shadow-lg rounded   mb-2   "
                      alt=""
                    />

                    <span className="text-center d-block   text-uppercase fw-semibold px-2 ">
                      {skill.skillTitle}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
