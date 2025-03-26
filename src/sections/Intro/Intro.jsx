import React from 'react';
import './Intro.css';
import { introData } from '../../data/data';

const Intro = () => {
  if (!introData || introData.length === 0) {
    return <div>Loading</div>;
  }

  const { introName, caption, description } = introData[0];
  return (
    <section className=" section_intro custom_height   " id="intro">
      <div className="container">
        <div className="row intro_wrapper  justify-content-lg-between align-items-center     gy-3 gy-md-4 gy-lg-0 custom_height ">
          <div className="col-12 col-lg-7 order-2 order-lg-1 ">
            <div className=" text-center text-md-start">
              <h3 className=" heading text-capitalize display-6    fw-bold mb-2">
                {introName}
              </h3>
              <h1 className=" mb-4   heading  display-5    fw-bold ">
                {caption}
              </h1>
              <p className=" mb-4  custom_text  text-md-start   fs-5 ">
                {description}
              </p>
              <div className="d-flex justify-content-md-start justify-content-center gap-2   home_btn">
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="blank"
                >
                  <button className="text-capitalize fw-semibold    rounded-pill   shadow-lg custom_btn">
                    Linkedin
                  </button>
                </a>

                <a href="/images/portfolio.pdf" download>
                  <button className=" custom_btn   rounded-pill ">
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="profile_img  text-center ">
              <img src="/images/pic-1.png" className="img-fluid p-2 " alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
