import React from 'react';
import './Contact.css';

import SendMail from '../../components/SendMail/SendMail';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactMe from '../../components/ContactMe/ContactMe';
const Contact = () => {
  return (
    <section className="section_contact custom_height  " id="contact">
      <div className="container">
        <PageTitle
          title={'Contact Me'}
          text={
            'Feel free to connect any time to dicuss about your website design need'
          }
        />

        <div className="row   justify-content-evenly     ">
          <div className="col-12 col-lg-5  ">
            <ContactMe />
          </div>
          <div className="col-12 col-lg-5">
            <SendMail />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
