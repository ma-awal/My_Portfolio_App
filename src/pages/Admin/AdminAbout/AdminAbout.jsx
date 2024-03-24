import React from 'react';
import './AdminAbout.css';

const AdminAbout = () => {
  return (
    <div className="admin_form py-4">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="aboutHeading">About Heading</label>
          <input
            type="text"
            className="form-control"
            placeholder="about heading"
            name="aboutHeading"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="aboutDesc">About Description</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="about description"
            name="aboutDesc"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="aboutImg">Image Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image Url"
            name="aboutImg"
          />
        </div>

        <button type="submit" className="btn save_btn float-end rounded-0">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminAbout;
