import React from 'react';

import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Social.css';
import { socialData } from '../../data/data';
const Social = () => {
  if (!socialData || socialData.length === 0) {
    return <div>Loading</div>;
  }
  const { heading, facebookUrl, linkedinUrl, githubUrl } = socialData[0];
  return (
    <div className="social  text-center  pt-3 ">
      <h6 className="  text-capitalize custom_heading ">{heading}</h6>
      <div className="social_info d-flex align-items-center   justify-content-center gap-2 ">
        <a className="single_link" href={`${facebookUrl}`}>
          <span>
            <FaFacebook />
          </span>
        </a>

        <a className="single_link" href={`${linkedinUrl}`}>
          <span>
            <FaLinkedin />
          </span>
        </a>
        <a className="single_link" href={`${githubUrl}`}>
          <span>
            <FaGithub />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Social;
