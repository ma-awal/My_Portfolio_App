import React from 'react';
import './About.css';
import { aboutData } from '../../data/data';
import PageTitle from '../../components/PageTitle/PageTitle';
const About = () => {
  if (!aboutData || aboutData.length === 0) {
    // Check if introData exists and has data
    return <div>Loading</div>;
  }
  const { aboutHeading, aboutDesc, aboutImg } = aboutData[0];

  return (
    <section className="section_about custom_height" id="about">
      <div className="container">
        <PageTitle title={'About'} />
        <div className="row   justify-content-between align-items-center g-5    text-center text-md-start    ">
          <div className="col-12 col-lg-5">
            <div className="about_img  ">
              <img src="/images/pic-2.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-12   col-lg-6">
            <div className="about_info     ">
              <h3 className="text-uppercase mb-3 custom_heading">
                {aboutHeading}
              </h3>
              <p className=" mb-3 custom_text">{aboutDesc}</p>
              <div className="resume">
                <a href="/images/portfolio.pdf" download>
                  <button className=" custom_btn rounded-pill     ">
                    Download cv
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
