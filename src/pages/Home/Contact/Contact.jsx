import React from 'react';
import './Contact.css';

import SendMail from '../../../components/SendMail/SendMail';
import PageTitle from '../../../components/PageTitle/PageTitle';
import ContactMe from '../../../components/ContactMe/ContactMe';

const Contact = () => {
  return (
    <div className="contact  ">
      <div className="container">
        <PageTitle title={'Contact Me'} />
        <div className="row  align-items-center justify-content-between g-3 ">
          <div className="col-12 col-lg-6">
            <ContactMe />
          </div>
          <div className="col-12 col-lg-5 ">
            <SendMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
