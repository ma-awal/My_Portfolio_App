import React from 'react';
import './PageTitle.css';
function PageTitle({ title, text }) {
  return (
    <div className="page_title text-center  mb-3 mb-md-4 mb-lg-5   ">
      <h2 className="display-5 text-capitalize  heading fw-bolder  ">
        {title}
      </h2>

      <p className="custom_text mt-2  text-center  m-auto fs-6">{text}</p>
    </div>
  );
}

export default PageTitle;
