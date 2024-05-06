import React from 'react';
import './ContactMe.css';

import { FaLocationCrosshairs } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { FaMobileScreen } from 'react-icons/fa6';
const ContactMe = () => {
  return (
    <div className="contact_me common text-center text-lg-start">
      <ul className="contact_info  list-group-item    ">
        <li className="single_item   ">
          <div>
            <FaLocationCrosshairs className="icon" />
          </div>
          <div>
            <h6 className="custom_heading">Sirajganj Dhaka Bangladesh</h6>
            <span> The current Location</span>
          </div>
        </li>
        <li className="single_item ">
          <div>
            <IoMailSharp className="icon" />
          </div>
          <div>
            <h6 className="custom_heading ">awal3web@gmail.com</h6>
            <span> Send your mail any time</span>
          </div>
        </li>

        <li className="single_item ">
          <div>
            <FaMobileScreen className="icon" />
          </div>
          <div>
            <h6 className="custom_heading  ">01812959878</h6>
            <span>Don't forget to knock through mobile</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
