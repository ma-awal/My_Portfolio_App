import React from 'react';
import './Footer.css';

import Address from '../ContactMe/ContactMe';
import Social from '../Social/Social';
import SendMail from '../SendMail/SendMail';

const Footer = () => {
  return (
    <footer className="footer  ">
      <div class="col-12   col-lg-4 ">
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
