// SideBar.jsx
import React from 'react';
import './SideBar.css';
import { FaTimes } from 'react-icons/fa';

import { linkData } from '../../data/data';
const SideBar = ({ onClose }) => {
  return (
    <div className="sidebar d-md-none">
      <div className="page_link pe-2">
        <div className="d-flex align-items-center justify-content-between  py-3  px-2  ">
          <img src="/images/brand.png" className="img-fluid" alt="img" />
          <span className="icon" onClick={onClose}>
            <FaTimes />
          </span>
        </div>
        <ul className="sidebar_link list-group-item">
          {linkData.map((link) => (
            <li key={link.name} className="rounded-pill">
              <a href={`#${link.path}`} onClick={onClose}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
