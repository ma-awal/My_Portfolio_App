import React from 'react';
import './Address.css';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { contactData } from '../../data/data';

const Address = () => {
  if (!contactData || contactData.length === 0) {
    return <div>Loading</div>;
  }
  const { cMail, cLocation, cMobile } = contactData[0];

  return (
    <div className="address">
      <h5 className=" text-uppercase ">Address</h5>
      <ul className="address_info  list-group-item    ">
        <li className="single_item   ">
          <span>
            <FaLocationDot />
          </span>
          <span className="text-capitalize">{cLocation}</span>
        </li>
        <li className="single_item ">
          <span>
            <IoMailSharp />
          </span>
          <span className="text-lowercase">{cMail}</span>
        </li>

        <li className="single_item ">
          <span>
            <FaPhoneSquareAlt />
          </span>
          <span className="text-lowercase">{cMobile}</span>
        </li>
      </ul>
    </div>
  );
};

export default Address;
