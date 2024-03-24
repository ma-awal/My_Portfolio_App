import React from 'react';
import './AdminContact.css';

const AdminContact = () => {
  return (
    <div className="admin_form py-4">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="cMail">Mail</label>
          <input
            type="text"
            className="form-control"
            placeholder="Mail"
            name="cMail"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cLocation">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            name="cLocation"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="cMobile">Mobile</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Mobile"
            name="cMobile"
          />
        </div>

        <button type="submit" className="btn save_btn float-end rounded-0">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminContact;
