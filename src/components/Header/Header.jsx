/* eslint-disable jsx-a11y/anchor-is-valid */
// Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import SideBar from '../SideBar/SideBar.jsx';
import { linkData } from '../../data/data.js';
const Header = () => {
  const [show, setShow] = useState(false);
  const toggleSideBar = () => {
    setShow(!show);
  };

  return (
    <section className="nav_bar">
      <div className="container">
        <div className="navbar_sm nav_icon d-md-none d-flex justify-content-between align-items-center px-3">
          <img src="/images/brand.png" className="img-fluid" alt="img" />
          <span>
            <FaBars className="bar" onClick={toggleSideBar} />
          </span>

          {show && <SideBar onClose={toggleSideBar} />}
        </div>
        <div className="navbar_lg d-none d-md-flex justify-content-between align-items-center">
          <a className="navbar-brand">
            <img src="/images/brand.png" className="img-fluid" alt="img" />
          </a>
          <div className="nav_link  d-flex gap-3 align-items-center justify-content-center">
            {linkData.map((link, index) => {
              return (
                <a href={`#${link.path}`} className="" key={index}>
                  {link.name}
                </a>
              );
            })}
          </div>
          {/* <div className="resume">
            <a href="/images/portfolio.pdf" download>
              <button className=" custom_btn   rounded-pill ">Resume</button>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
