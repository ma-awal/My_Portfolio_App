import React from 'react';
import './Links.css';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="links common">
      <h6 className="   ">Links</h6>
      <ul className="address_info  list-group-item     ">
        <li className="single_item   ">
          <a href="/">Home</a>
        </li>
        <li className="single_item ">
          <a href="#about">About</a>
        </li>

        <li className="single_item ">
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
