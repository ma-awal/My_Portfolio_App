import React from 'react';
import './ContactMe.css';

import { FaLocationCrosshairs } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { FaMobileScreen } from 'react-icons/fa6';
const ContactMe = () => {
  return (
    <div className="contact_me common">
      {/* <h5 className="   ">Contact Me</h5> */}
      <ul className="contact_info  list-group-item    ">
        <li className="single_item   ">
          <div>
            <FaLocationCrosshairs className="icon" />
          </div>
          <div>
            <p>Sirajganj Dhaka Bangladesh</p>
            <span> The city of Bangladesh</span>
          </div>
        </li>
        <li className="single_item ">
          <div>
            <IoMailSharp className="icon" />
          </div>
          <div>
            <p>awal3web@gmail.com</p>
            <span> Send your mail any time</span>
          </div>
        </li>

        <li className="single_item ">
          <div>
            <FaMobileScreen className="icon" />
          </div>
          <div>
            <p className="text-lowercase"> 01812959878</p>
            <span>Don't forget to knock through mobile</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
