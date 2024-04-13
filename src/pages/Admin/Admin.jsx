import React, { useState } from 'react';

import './Admin.css';
import AdminIntro from './AdminIntro/AdminIntro';
import AdminAbout from './AdminAbout/AdminAbout';
import PageTitle from '../../components/PageTitle/PageTitle';
import AdminSocial from './AdminSocial/AdminSocial';
import AdminContact from './AdminContact/AdminContact';
const adminTab = [
  { title: 'Intro', content: <AdminIntro /> },
  { title: 'About', content: <AdminAbout /> },
  { title: 'Contact', content: <AdminContact /> },
  { title: 'Social', content: <AdminSocial /> },
];

const Admin = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="admin  w-100  ">
      <PageTitle title={'Admin'} />
      <div className="container  ">
        <div className="row justify-content-center pt-5  ">
          <div className="col-12 col-lg-8">
            <div className="tab_btns  d-flex align-items-center justify-content-center flex-wrap gap-2 gap-lg-3 mb-5 ">
              {adminTab.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`btn tab_btn   rounded-0 ${
                      index === active ? 'active' : ''
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
            <div className="tab_content   ">{adminTab[active].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
