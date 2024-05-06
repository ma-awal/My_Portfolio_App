import React from 'react';
import './Footer.css';
import Social from './../Social/Social';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className="col-12   col-lg-4 ">
        <Social />
      </div>
      <div className="up_down ">
        <a
          href="#intro"
          className="text-decoration-none up_link"
          style={{ zIndex: 1 }}
        >
          <span>
            <FaArrowUp className="icon" />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
