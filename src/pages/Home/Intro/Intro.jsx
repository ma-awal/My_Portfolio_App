import React from 'react';
import './Intro.css';
import { introData } from '../../../data/data';

const Intro = () => {
  if (!introData || introData.length === 0) {
    return <div>Loading</div>;
  }

  const { welcomeText, introName, caption, description } = introData[0];
  return (
    <section className=" section_intro   custom_height" id="intro">
      <div className="container">
        <div className="row intro_wrapper  justify-content-between align-items-center    gy-3 gy-md-4 gy-lg-0 custom_height ">
          <div className="col-12  col-md-7 ">
            <div className="   text-center text-md-start    ">
              <h4 className=" p-0 text-capitalize custom_style   fw-bold mb-2">
                {welcomeText} <span> . . .</span>
              </h4>
              <h2 className=" heading text-capitalize display-6  fw-bold mb-2">
                {introName}
              </h2>
              <h1 className="mb-3 heading display-4 fw-bold ">{caption}</h1>
              <p className=" mb-4 custom_text text-center text-md-start fs-5 ">
                {description} .
              </p>
              <div className="d-flex justify-content-md-start justify-content-center gap-2   home_btn">
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="blank"
                >
                  <button className="text-capitalize fw-semibold    rounded-pill   shadow-lg custom_btn">
                    Profile
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4       ">
            <div className="profile_img p-3  ">
              <img src="/images/abo.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
