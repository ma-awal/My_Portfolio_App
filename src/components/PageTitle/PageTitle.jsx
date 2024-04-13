import React from 'react';
import './PageTitle.css';
function PageTitle({ title }) {
  const pageStyle = {};
  return (
    <div className="page_title text-center pt-2    ">
      <h2 className=" display-6    text-capitalize pb-3  " style={pageStyle}>
        {title}
      </h2>
    </div>
  );
}

export default PageTitle;
