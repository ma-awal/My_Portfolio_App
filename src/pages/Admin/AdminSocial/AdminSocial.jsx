import React from 'react';
import './AdminSocial';

const AdminSocial = () => {
  return (
    <div className="admin_form py-4">
      <form>
        <div className="form-group mb-3">
          <label htmlFor="socialHeading">Social Heading</label>
          <input
            type="text"
            className="form-control"
            placeholder="Social Heading"
            name="socialHeading"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="facebookUrl">Facebook Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Facebook url"
            name="facebookUrl"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="linkedinUrl">Linkedin Url</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Linkedin Url"
            name="linkedinUrl"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="instagramUrl">Instagram Url</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Instagram Url"
            name="instagramUrl"
          />
        </div>

        <button type="submit" className="btn save_btn float-end rounded-0">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminSocial;
