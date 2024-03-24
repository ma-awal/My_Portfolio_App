import React from 'react';
import './AdminIntro.css';

const AdminIntro = () => {
  return (
    <div className="admin_form py-4 ">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="welcomText">WelcomText:</label>
          <input
            type="text"
            className="form-control"
            placeholder="welcome text"
            name="welcomeText"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="introName">Intro Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="intro name"
            name="introName"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="caption">Caption</label>
          <input
            type="text"
            className="form-control"
            placeholder="caption"
            name="caption"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
          />
        </div>
        <button type="submit" className="btn save_btn float-end rounded-0">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminIntro;
