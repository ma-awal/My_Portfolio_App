import React from 'react';

import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Social.css';
import { socialData } from '../../data/data';
const Social = () => {
  if (!socialData || socialData.length === 0) {
    return <div>Loading</div>;
  }
  const { socialHeading, facebookUrl, linkedinUrl, instagramUrl } =
    socialData[0];
  return (
    <div className="social">
      <h5 className=" text-uppercase   ">{socialHeading}</h5>
      <ul className="social_info list-group-item   text-capitalize ">
        <li>
          <a className="single_link" href={`${facebookUrl}`}>
            <span>
              <FaFacebook />
            </span>
            <span> Facebook</span>
          </a>
        </li>
        <li>
          <a className="single_link" href={`${linkedinUrl}`}>
            <span>
              <FaLinkedin />
            </span>
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a className="single_link" href={`${instagramUrl}`}>
            <span>
              <FaInstagram />
            </span>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
