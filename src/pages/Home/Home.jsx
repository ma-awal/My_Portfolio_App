import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { introData } from '../../data/data';

const Home = () => {
  if (!introData || introData.length === 0) {
    return <div>Loading</div>;
  }

  const { welcomeText, introName, caption, description } = introData[0]; // Access the first element of introData array

  return (
    <section className="home_section     ">
      <div className="container">
        <div className="row intro_wrapper    justify-content-center align-items-center  ">
          <div className="col-12 col-lg-10 ">
            <div className="row justify-content-between align-items-center    gy-3 gy-md-4 gy-lg-0  ">
              <div className="col-12 col-md-5 col-lg-4   order-md-2      ">
                <div className="profile_img p-3">
                  <img src="/images/abo.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12  col-md-7   ">
                <div className=" text-uppercase text-center text-md-start    ">
                  <h5 className="m-0 p-0">
                    {welcomeText} <span> . . .</span>
                  </h5>
                  <h2 className="display-5  ">{introName} </h2>
                  <h3 className="mb-3 ">{caption}</h3>
                  <p className=" mb-3 text-capitalize">{description}</p>
                  <div className="d-flex justify-content-md-start justify-content-center gap-2   home_btn">
                    <Link to="/projects">
                      <button className="text-uppercase   px-3 py-2  ">
                        My work
                      </button>
                    </Link>
                    <a href="/images/portfolio.pdf" download>
                      <button className="text-uppercase   px-3 py-2 ">
                        Download cv
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
