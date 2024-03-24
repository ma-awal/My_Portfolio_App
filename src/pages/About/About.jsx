import React from 'react';
import './About.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import { aboutData } from '../../data/data';

const About = () => {
  if (!aboutData || aboutData.length === 0) {
    // Check if introData exists and has data
    return <div>Loading</div>;
  }
  const { aboutHeading, aboutDesc, aboutImg } = aboutData[0];

  return (
    <section className="about    ">
      <div className="container">
        <PageTitle title={'About'} />
        <div className="row   justify-content-center align-items-center gy-4  gy-lg-5   text-center text-md-start  py-3  ">
          <div className="col-12 col-lg-8">
            <div className="about_img">
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-12   col-lg-8">
            <div className="about_info     ">
              <h3 className="text-uppercase mb-3">{aboutHeading}</h3>
              <p className=" ">{aboutDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
