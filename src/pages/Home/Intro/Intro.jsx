import React from 'react';
import './Intro.css';
import { introData } from '../../../data/data';

const Intro = () => {
  if (!introData || introData.length === 0) {
    return <div>Loading</div>;
  }

  const { welcomeText, introName, caption, description } = introData[0]; // Access the first element of introData array

  return (
    <div className=" intro   ">
      <div className="container">
        <div className="row intro_wrapper  justify-content-between align-items-center    gy-3 gy-md-4 gy-lg-0  ">
          <div className="col-12 col-md-5 col-lg-4   order-md-2      ">
            <div className="profile_img p-3">
              <img src="/images/abo.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-12  col-md-7   ">
            <div className="   text-center text-md-start    ">
              <h5 className="m-0 p-0 text-capitalize">
                {welcomeText} <span> . . .</span>
              </h5>
              <h1 className="  ">{introName} </h1>
              <h3 className="mb-3 ">{caption}</h3>
              <p className=" mb-3  ">{description}</p>
              <div className="d-flex justify-content-md-start justify-content-center gap-2   home_btn">
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="blank"
                >
                  <button className="text-capitalize fw-semibold   px-3 py-2  ">
                    Profile
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
